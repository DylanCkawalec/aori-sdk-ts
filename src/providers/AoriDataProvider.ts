import axios from "axios";
import { JsonRpcError, JsonRpcResult } from "ethers";
import { AORI_DATA_PROVIDER_API } from "../utils";
import { AoriDataMethods, AoriMethods } from "./utils";

export class AoriDataProvider {

    async getBlockNumber({
        chainId
    }: {
        chainId: number
    }) {
        const { blockNumber } = await this.rawCall({
            method: AoriDataMethods.GetBlockNumber,
            params: [{ chainId }]
        })
        return blockNumber;
    }

    async getNonce({
        chainId,
        address
    }: {
        chainId: number;
        address: string;
    }) {
        const { nonce } = await this.rawCall({
            method: AoriDataMethods.GetNonce,
            params: [{ address, chainId }]
        });
        return nonce;
    }

    async getSeaportCounter({
        chainId,
        address
    }: {
        chainId: number;
        address: string;
    }) {
        const { counter } = await this.rawCall({
            method: AoriDataMethods.GetSeaportCounter,
            params: [{ address, chainId }]
        });
        return counter;
    }

    async getSeatDetails({
        seatId
    }: {
        seatId: number
    }) {
        const data = await this.rawCall({
            method: AoriDataMethods.GetSeatDetails,
            params: [{ seatId }]
        });
        return data;
    }

    async getTokenAllowance({
        chainId,
        address,
        token
    }: {
        chainId: number;
        address: string;
        token: string;
    }) {
        const { tokenAllowance } = await this.rawCall({
            method: AoriDataMethods.GetTokenAllowance,
            params: [{ address, chainId, token }]
        });
        return tokenAllowance;
    }

    async getTokenBalance({
        chainId,
        address,
        token
    }: {
        chainId: number;
        address: string;
        token: string;
    }) {
        const { tokenBalance } = await this.rawCall({
            method: AoriDataMethods.GetTokenBalance,
            params: [{ address, chainId, token }]
        });
        return tokenBalance;
    }

    async hasOrderSettled({
        chainId,
        orderHash
    }: {
        chainId: number;
        orderHash: string;
    }) {
        const { orderSettled } = await this.rawCall({
            method: AoriDataMethods.HasOrderSettled,
            params: [{ chainId, orderHash }]
        });
        return orderSettled;
    }

    async isValidSignature({
        chainId,
        vault,
        hash,
        signature
    }: {
        chainId: number;
        vault: string;
        hash: string;
        signature: string;
    }) {
        const { isValidSignature } = await this.rawCall({
            method: AoriDataMethods.IsValidSignature,
            params: [{ chainId, vault, hash, signature }]
        });
        return isValidSignature;
    }

    async getGasData({
        chainId,
        to,
        value,
        data: _data
    }: {
        chainId: number;
        to: string;
        value: number;
        data: string;
    }) {
        const data = await this.rawCall({
            method: AoriDataMethods.GetGasData,
            params: [{ chainId, to, value, data: _data }]
        });
        return data;
    }

    async sendTransaction({
        signedTx,
        chainId
    }: {
        signedTx: string
        chainId: number
    }) {
        const data = await this.rawCall({
            method: AoriDataMethods.SendTransaction,
            params: [{ signedTx, chainId }]
        });
        return data;
    }

    async rawCall<T>({
        method,
        params
    }: {
        method: AoriMethods | string,
        params: [T] | []
    }) {
        const { data: axiosResponseData }: { data: JsonRpcResult | JsonRpcError } = await axios.post(AORI_DATA_PROVIDER_API, {
            id: 1,
            jsonrpc: "2.0",
            method,
            params
        });

        if ("error" in axiosResponseData) {
            throw new Error(axiosResponseData.error.message);
        }

        const { result: data } = axiosResponseData;
        return data;
    }
}