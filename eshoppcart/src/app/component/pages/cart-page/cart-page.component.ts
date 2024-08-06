import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/CartItem';
import { AuthenticationService } from '../../../services/authentication.service'; // Import AuthenticationService

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  username: string = ''; // Add a variable for the username

  constructor(
    private cartService: CartService,
    private authService: AuthenticationService // Inject AuthenticationService
  ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.username = user?.displayName || 'Guest'; // Fetch and display username
    });
  }

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
