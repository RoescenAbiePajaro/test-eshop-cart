import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
  }
ngOnInit(): void{
  }

  removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.product.id);
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
  }
}