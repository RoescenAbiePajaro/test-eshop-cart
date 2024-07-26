import { Injectable } from '@angular/core';
import { Cart } from '../shared/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { productsi } from '../shared/productsi';
import { CartItem } from '../shared/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(product:productsi):void{
    let cartItem  = this.cart.items.find(item => item.product.id == product.id);
    if(cartItem)
    return;

    this.cart.items.push(new CartItem(product));
  }

  removeFromCart(productId: string): void{
    this.cart.items = this.cart.items
    .filter(item => item.product.id != productId);
  }
  changeQuantity(productId:string, quantity:number){
    let cartItem  = this.cart.items.find(item => item.product.id === productId);
  if(!cartItem) return;

  cartItem.quantity = quantity * cartItem.product.price;
}
clearCart(){
  this.cart = new Cart();
}
getCartObservable():Observable<Cart>{
  return this.cartSubject.asObservable();
}
private setCartToLocalStorage():void{
  this.cart.totalPrice = this.cart.items
  .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
  this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
  
  const cartJson =  JSON.stringify(this.cart);
  localStorage.setItem('Cart',cartJson);
}
}
