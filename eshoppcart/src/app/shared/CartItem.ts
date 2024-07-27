import { productsi } from "./productsi";

export class CartItem {
    quantity: number = 1;
    price: number;

    constructor(public product: productsi) {
        this.price = this.product.price;
    }
}