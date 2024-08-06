import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  name: string = '';
  address: string = '';

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    const cart = this.cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });

    this.authService.getCurrentUser().subscribe(user => {
      this.name = user?.displayName || 'Guest';
      // Retrieve address from local storage
      this.address = localStorage.getItem('userAddress') || '';
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  pay() {
    if (this.checkoutForm.invalid) {
      return;
    }
    console.log('Processing payment...');
    this.createOrder();
  }

  createOrder() {
    if (this.checkoutForm.invalid) {
      return;
    }
    console.log('Creating order...');
    console.log(this.order);
    this.router.navigate(['/order-success']);
  }
}
