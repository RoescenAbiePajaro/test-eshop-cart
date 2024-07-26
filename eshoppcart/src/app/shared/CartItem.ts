import { productsi } from "./productsi";

export class CartItem{
    constructor(public product:productsi){
    }
    quantity:number = 1;
    price: number = this.product.price;
}