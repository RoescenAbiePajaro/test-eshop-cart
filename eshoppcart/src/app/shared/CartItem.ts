import { productsi } from "./productsi";

export class CartItem{
    constructor(product:productsi){
        this.product = product;
    }
    product!:productsi;
    quantity:number = 1;
    price: number = this.product.price;
}