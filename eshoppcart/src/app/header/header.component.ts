import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'; // Update the path as necessary
import { User } from '@angular/fire/auth';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  cartCount: number = 0;
  userName: string = ''; // Variable to hold the username

  constructor(private cartService: CartService,private authService:AuthenticationService) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe(cart => {
      this.cartCount = cart.totalCount;
      
    });
    this.authService.getCurrentUser().subscribe(user => {
      this.userName = user?.displayName || 'Guest'; // Display username
    });
  }
}