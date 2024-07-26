import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { productsi } from '../../../shared/productsi';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  product!:productsi;
  constructor(activatedRoute:ActivatedRoute, productService:ProductService){
    activatedRoute.params.subscribe((params) =>{
      if(params.id)
      this.product = productService.getProductsById(params.id);
    })
  }
  ngOnInit(): void {
  }
}
