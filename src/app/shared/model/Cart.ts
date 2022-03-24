import { CartItem } from "./cartItem";

export class Cart {
    items: CartItem[] = [];

    get totalPrice(): number {
        let totalPrice:any = 0;
        this.items.forEach(item => {
            totalPrice  += item.price;

        });
        return totalPrice;
    }
}