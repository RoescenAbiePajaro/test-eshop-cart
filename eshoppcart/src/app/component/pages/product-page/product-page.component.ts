import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { productsi } from '../../../shared/productsi';
import { CartService } from '../../../services/cart.service';

//this.product // Food-Page
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  product!:productsi;
  constructor(activatedRoute:ActivatedRoute, productService:ProductService,
    private cartService:CartService,private router: Router){
    activatedRoute.params.subscribe((params) =>{
      if(params.id)
      this.product = productService.getProductsById(params.id);
    })
  }
  ngOnInit(): void {
    
  }
  addToCart(): void{
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }
}


