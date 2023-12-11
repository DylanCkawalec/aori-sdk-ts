import { parseEther } from "ethers";
import { AoriHttpProvider, SubscriptionEvents } from "../providers";
import { ERC20__factory } from "../types";
import { InstructionStruct } from "../types/AoriVault";
import { SEAPORT_ADDRESS } from "../utils";

export class BatchMaker extends AoriHttpProvider {

    aoriVaultContract: string = "";

    /*//////////////////////////////////////////////////////////////
                                 STATE
    //////////////////////////////////////////////////////////////*/

    preCalldata: { [orderHash: string]: InstructionStruct[] } = {};
    postCalldata: { [orderHash: string]: InstructionStruct[] } = {};

    /*//////////////////////////////////////////////////////////////
                               INITIALISE
    //////////////////////////////////////////////////////////////*/

    async initialise({ aoriVaultContract }: { aoriVaultContract: string }) {
        console.log("Initialising flash maker...");
        this.aoriVaultContract = aoriVaultContract;

        this.on(SubscriptionEvents.OrderToExecute, async ({ makerOrderHash: orderHash, to, value, data }) => {
            if (!this.preCalldata[orderHash]) return;

            try {
                await this.sendTransaction({
                    to: aoriVaultContract,
                    value: 0,
                    // @ts-ignore 
                    data: AoriVault__factory.createInterface().encodeFunctionData("execute", [[
                        ...(this.preCalldata[orderHash] || []),
                        { to, value, data },
                        ...(this.postCalldata[orderHash] || [])
                    ]]),
                    gasLimit: 3_000_000
                });
                console.log(`Sent transaction: `, { to, value, data });
            } catch (e: any) {
                console.log(e);
            }
        });
    }

    async generateQuoteOrder({
        inputToken,
        outputToken,
        inputAmount: amountFromMe,
        outputAmount: amountForUser, // this is for the user
        preCalldata = [],
        postCalldata = [],
        cancelAfter
    }: {
        inputToken: string;
        outputToken: string;
        inputAmount: bigint;
        outputAmount: bigint;
        preCalldata?: InstructionStruct[],
        postCalldata?: InstructionStruct[],
        cancelAfter?: number
    }) {

        const order = await this.createLimitOrder({
            offerer: this.aoriVaultContract,
            inputToken: outputToken,
            inputAmount: amountFromMe,
            outputToken: inputToken,
            outputAmount: amountForUser
        });
        console.log(`Made order: `, order.parameters.offer, `for`, order.parameters.consideration);
        const orderHash = order.orderHash;

        await this.makeOrder({ order });

        this.preCalldata[orderHash] = [
            {
                to: inputToken,
                value: 0,
                data: ERC20__factory.createInterface().encodeFunctionData("approve", [
                    SEAPORT_ADDRESS, parseEther("100000")
                ])
            }, ...preCalldata];

        this.postCalldata[orderHash] = postCalldata;

        if (cancelAfter != undefined) {
            setTimeout(async () => {
                try {
                    await this.cancelOrder(orderHash);
                } catch (e: any) {
                    console.log(e);
                }
            }, cancelAfter);
        }

        return { order, orderHash }
    }
}