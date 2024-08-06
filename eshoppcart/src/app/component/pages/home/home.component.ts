import { Component, OnInit } from '@angular/core';
import { productsi } from '../../../shared/productsi';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: productsi[] = [];
  currentUser: User | null = null;
  errorMessage: string | null = null; // To display error messages in the template

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    // Fetch the current user
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      // Load products after fetching the user
      this.loadProducts();
    });
  }

  loadProducts() {
    let productsObservable: Observable<productsi[]>;

    // Subscribe to route parameters and fetch products based on search or tag
    this.activatedRoute.params.subscribe(params => {
      if (params.searchTerm) {
        productsObservable = this.productService.getAllProductsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        productsObservable = this.productService.getAllProductsByTag(params.tag);
      } else {
        productsObservable = this.productService.getAll();
      }

      // Fetch products and update the local products array
      productsObservable.subscribe({
        next: (serverProducts) => {
          this.products = serverProducts;
          console.log('Products fetched:', serverProducts); // Debugging line
        },
        error: (error) => {
          this.errorMessage = 'Error fetching products. Please try again later.';
          console.error('Error fetching products:', error); // Debugging line
        }
      });
    });
  }
}
