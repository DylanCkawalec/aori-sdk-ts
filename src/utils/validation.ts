import { OrderComponents, OrderParameters } from "@opensea/seaport-js/lib/types";

export async function getOrderComponents(orderParameters: OrderParameters, counter: number): Promise<OrderComponents> {

    return {
        offerer: orderParameters.offerer,
        zone: orderParameters.zone,
        offer: orderParameters.offer,
        consideration: orderParameters.consideration,
        orderType: orderParameters.orderType,
        startTime: orderParameters.startTime,
        endTime: orderParameters.endTime,
        zoneHash: orderParameters.zoneHash,
        salt: orderParameters.salt,
        conduitKey: orderParameters.conduitKey,
        counter
    } as any;
}