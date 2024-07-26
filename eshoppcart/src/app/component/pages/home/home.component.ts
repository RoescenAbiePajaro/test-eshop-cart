import { Component, OnInit } from '@angular/core';
import { productsi } from '../../../shared/productsi';
import { ProductService, } from '../../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products:productsi[] = []; //products to this.products
constructor(private productService:ProductService){  //balik ka sa line na toh
this.products = productService.getAll();
}
ngOnInit(): void {
    
}

}
