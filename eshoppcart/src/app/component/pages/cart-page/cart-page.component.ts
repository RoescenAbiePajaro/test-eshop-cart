import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'] // Note: Corrected from 'styleUrl' to 'styleUrls'
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  product: any;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {}

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
  }

  incrementQuantity(cartItem: CartItem) {
    if (cartItem.quantity < 100000) {
      cartItem.quantity++;
      this.updateCartItem(cartItem);
    }
  }

  decrementQuantity(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.updateCartItem(cartItem);
    }
  }

  updateCartItem(cartItem: CartItem) {
    this.cartService.changeQuantity(cartItem.product.id, cartItem.quantity);
  }
}
