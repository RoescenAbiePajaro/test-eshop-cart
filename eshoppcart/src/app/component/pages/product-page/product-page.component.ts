import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { productsi } from '../../../shared/productsi'; // Ensure this import is correct
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'] // Corrected property name
})
export class ProductPageComponent implements OnInit {
  product!: productsi; // Corrected type declaration

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.productService.getProductsById(params.id).subscribe((serverProduct) => {
          this.product = serverProduct;
        });
      }
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }
}
