import { AoriProvider, OrderView, ResponseEvents } from "../providers";
import { OrderWithCounter } from "./helpers";
import { getOrderHash } from "./OrderHasher";

export class LimitOrderManager extends AoriProvider {
    currentLimitOrders: { [orderHash: string]: OrderView } = {};
    awaitingOrderCreation: Set<string> = new Set();

    /*//////////////////////////////////////////////////////////////
                               INITIALISE
    //////////////////////////////////////////////////////////////*/

    async initialise(...any: any[]): Promise<void> {
        super.initialise();

        this.on(ResponseEvents.AoriMethods.AccountOrders, (orders) => {
            orders.forEach(order => {
                this.currentLimitOrders[order.orderHash] = order;
            });
        });

        this.on(ResponseEvents.SubscriptionEvents.OrderCreated, (order) => {
            if (!this.awaitingOrderCreation.has(order.orderHash)) return;

            this.awaitingOrderCreation.delete(order.orderHash);
            this.currentLimitOrders[order.orderHash] = order;
        });

        this.on(ResponseEvents.SubscriptionEvents.OrderCancelled, (orderHash) => {
            delete this.currentLimitOrders[orderHash];
        });

        this.on(ResponseEvents.SubscriptionEvents.OrderTaken, (orderHash) => {
            delete this.currentLimitOrders[orderHash];
        });

        this.accountOrders();
    }

    async makeOrder({ order, chainId }: { order: OrderWithCounter; chainId: number; }): Promise<void> {
        super.makeOrder({ order, chainId });

        const orderHash = await getOrderHash(this.provider, order.parameters);
        this.awaitingOrderCreation.add(orderHash);
    }
}