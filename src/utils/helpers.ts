import { AbiCoder, getBytes, JsonRpcError, JsonRpcResult, solidityPackedKeccak256, verifyMessage, Wallet } from "ethers";
import { getNonce, sendTransaction } from "../providers";
import { AoriV2__factory, ERC20__factory } from "../types";
import { InstructionStruct } from "../types/AoriVault";
import { AoriMatchingDetails, AoriOrder } from "../utils";
import { AORI_V2_SINGLE_CHAIN_ZONE_ADDRESSES, defaultDuration, maxSalt } from "./constants";
import { DetailsToExecute, OrderView } from "./interfaces";

/*//////////////////////////////////////////////////////////////
                        RPC RESPONSE
//////////////////////////////////////////////////////////////*/

export function toRpcResponse<T = any>(id: number | null, result: T): JsonRpcResult {
    return {
        id,
        result
    } as JsonRpcResult
}

export function toRpcError(id: number, error: JsonRpcError["error"]): JsonRpcError {
    return {
        id,
        error
    }
}

export { JsonRpcError, JsonRpcPayload, JsonRpcResult, Wallet, ZeroAddress } from "ethers";

/*//////////////////////////////////////////////////////////////
                            ZONE
//////////////////////////////////////////////////////////////*/

export function getDefaultZone(chainId: number) {
    const zonesOnChain = AORI_V2_SINGLE_CHAIN_ZONE_ADDRESSES.get(chainId);
    if (!zonesOnChain) {
        throw new Error(`Chain ${chainId} is not supported yet!`);
    }
    return [...zonesOnChain][0];
}

export function isZoneSupported(chainId: number, address: string) {
    const zonesOnChain = AORI_V2_SINGLE_CHAIN_ZONE_ADDRESSES.get(chainId);
    if (!zonesOnChain) return false;
    return zonesOnChain.has(address.toLowerCase());
}

/*//////////////////////////////////////////////////////////////
                    ORDER HELPER FUNCTIONS
//////////////////////////////////////////////////////////////*/

export async function formatIntoLimitOrder({
    offerer,
    startTime = Math.floor((Date.now() - 5 * 60 * 1000) / 1000), // Start 5 minutes in the past
    endTime = startTime + defaultDuration,
    inputToken,
    inputAmount,
    inputChainId = 1,
    inputZone = getDefaultZone(inputChainId),
    outputToken,
    outputAmount,
    outputChainId = 1,
    outputZone = getDefaultZone(outputChainId),
    counter
}: {
    offerer: string;
    chainId?: number;
    zone?: string;
    startTime?: number;
    endTime?: number;
    inputToken: string;
    inputAmount: bigint;
    inputChainId: number;
    inputZone: string;
    outputToken: string;
    outputAmount: bigint;
    outputChainId: number;
    outputZone: string;
    counter: number;
}): Promise<AoriOrder> {

    return {
        offerer,
        inputToken,
        inputAmount: inputAmount.toString(),
        inputChainId,
        inputZone,
        outputToken,
        outputAmount: outputAmount.toString(),
        outputChainId,
        outputZone,
        startTime: `${startTime}`,
        endTime: `${endTime}`,
        salt: `${Math.floor(Math.random() * maxSalt)}`,
        counter,
        toWithdraw: true
    }
}

export function getOrderHash({
    offerer,
    inputToken,
    inputAmount,
    inputChainId,
    inputZone,
    outputToken,
    outputAmount,
    outputChainId,
    outputZone,
    startTime,
    endTime,
    salt,
    counter,
    toWithdraw
}: AoriOrder): string {
    return solidityPackedKeccak256([
        "address", // offerer
        // Input
        "address", // inputToken
        "uint256", // inputAmount
        "uint256", // inputChainId
        "address", // inputZone
        // Output
        "address", // outputToken
        "uint256", // outputAmount
        "uint256", // outputChainId
        "address", // outputZone
        // Other details
        "uint256", // startTime
        "uint256", // endTime
        "uint256", // salt
        "uint256", // counter
        "bool" // toWithdraw
    ], [
        offerer,
        inputToken,
        inputAmount,
        inputChainId,
        inputZone,
        outputToken,
        outputAmount,
        outputChainId,
        outputZone,
        startTime,
        endTime,
        salt,
        counter,
        toWithdraw
    ]);
}

export function signOrderSync(wallet: Wallet, order: AoriOrder) {
    const orderHash = getOrderHash(order);
    return wallet.signMessageSync(getBytes(orderHash));
}

export function getOrderSigner(order: AoriOrder, signature: string) {
    return verifyMessage(getBytes(getOrderHash(order)), signature);
}

export function toOrderView({
    order,
    signature,
    isActive = true,
    isPublic = true
}: {
    order: AoriOrder,
    signature?: string,
    isActive?: boolean,
    isPublic?: boolean
}): OrderView {
    return {
        orderHash: getOrderHash(order),
        order,
        signature,
        inputToken: order.inputToken,
        inputAmount: order.inputAmount,
        inputChainId: order.inputChainId,
        inputZone: order.inputZone,
        outputToken: order.outputToken,
        outputAmount: order.outputAmount,
        outputChainId: order.outputChainId,
        outputZone: order.outputZone,

        rate: parseFloat(order.outputAmount) / parseFloat(order.inputAmount),
        createdAt: Date.now(),
        lastUpdatedAt: Date.now(),
        isActive,
        isPublic
    }
}

/*//////////////////////////////////////////////////////////////
                    MATCHING HELPER FUNCTIONS
//////////////////////////////////////////////////////////////*/

export function getMatchingHash({
    makerSignature,
    takerSignature,
    blockDeadline,
    seatNumber,
    seatHolder,
    seatPercentOfFees
}: AoriMatchingDetails): string {
    return solidityPackedKeccak256([
        "bytes",
        "bytes",
        "uint256",
        "uint256",
        "address",
        "uint256"
    ], [
        makerSignature,
        takerSignature,
        blockDeadline,
        seatNumber,
        seatHolder,
        seatPercentOfFees
    ])
}

export function signMatchingSync(wallet: Wallet, matching: AoriMatchingDetails) {
    const matchingHash = getMatchingHash(matching);
    return wallet.signMessageSync(getBytes(matchingHash));
}

export function getMatchingSigner(matching: AoriMatchingDetails, signature: string) {
    return verifyMessage(getMatchingHash(matching), signature);
}

export function calldataToSettleOrders({
    makerOrder,
    takerOrder,
    makerSignature,
    takerSignature,
    blockDeadline,
    seatNumber,
    seatHolder,
    seatPercentOfFees,
}: AoriMatchingDetails, signature: string, hookData: string = "0x", options: string = "0x") {
    return AoriV2__factory.createInterface().encodeFunctionData("settleOrders", [{
        makerOrder,
        takerOrder,
        makerSignature,
        takerSignature,
        blockDeadline,
        seatNumber,
        seatHolder,
        seatPercentOfFees
    }, signature, hookData, options]);
}

export function toDetailsToExecute(matching: AoriMatchingDetails, matchingSignature: string, to: string, value: number, data: string): DetailsToExecute {
    return {
        matchingHash: getMatchingHash(matching),
        matching,
        matchingSignature,

        makerOrderHash: getOrderHash(matching.makerOrder),
        makerChainId: matching.makerOrder.inputChainId,
        makerZone: matching.makerOrder.inputZone,

        takerOrderHash: getOrderHash(matching.takerOrder),
        takerChainId: matching.takerOrder.inputChainId,
        takerZone: matching.takerOrder.inputZone,

        chainId: matching.takerOrder.inputChainId,

        to,
        value,
        data,

        maker: matching.makerOrder.offerer,
        taker: matching.takerOrder.offerer,

        inputToken: matching.makerOrder.inputToken,
        inputAmount: matching.makerOrder.inputAmount,
        outputToken: matching.takerOrder.inputToken,
        outputAmount: matching.takerOrder.inputAmount
    }
}

/*//////////////////////////////////////////////////////////////
                    SEAT-RELATED FUNCTIONS
//////////////////////////////////////////////////////////////*/

export function getSeatPercentageOfFees(seatScore: number): number {
    return [0, 40, 45, 50, 55, 60][seatScore];
}

/*//////////////////////////////////////////////////////////////
                    VAULT-RELATED FUNCTIONS
//////////////////////////////////////////////////////////////*/

export function encodeInstructions(
    preSwapInstructions: InstructionStruct[],
    postSwapInstructions: InstructionStruct[]
) {
    return AbiCoder.defaultAbiCoder().encode(
        ["((address, uint256, bytes)[]), (address, uint256, bytes)[])"],
        [preSwapInstructions, postSwapInstructions]
    )
}

export function encodePreSwapInstructions(preSwapInstructions: InstructionStruct[]) {
    return AbiCoder.defaultAbiCoder().encode(
        ["((address, uint256, bytes)[], (address, uint256, bytes)[])"],
        [preSwapInstructions, []]
    )
}

export function encodePostSwapCalldata(postSwapInstructions: InstructionStruct[]) {
    return AbiCoder.defaultAbiCoder().encode(
        ["((address, uint256, bytes)[], (address, uint256, bytes)[])"],
        [[], postSwapInstructions]
    )
}

export function decodeInstructions(encoded: string) {
    return AbiCoder.defaultAbiCoder().decode(
        ["((address, uint256, bytes)[]), (address, uint256, bytes)[])"],
        encoded
    )
}

/*//////////////////////////////////////////////////////////////
                            WALLET
//////////////////////////////////////////////////////////////*/

export async function approveToken(
    wallet: Wallet,
    chainId: number,
    token: string,
    spender: string,
    amount: bigint
) {
    const signedTx = await wallet.signTransaction({
        to: spender,
        value: 0,
        data: ERC20__factory.createInterface().encodeFunctionData("approve", [token, amount]),
        chainId,
        gasLimit: 100_000,
        nonce: await getNonce(chainId, wallet.address)
    });

    return sendTransaction(signedTx);
}