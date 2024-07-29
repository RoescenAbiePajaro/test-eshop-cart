import { Component, OnInit } from '@angular/core';
import { productsi } from '../../../shared/productsi';
import { ProductService, } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products:productsi[] = []; //products to this.products
constructor(private productService:ProductService, activatedRoute:ActivatedRoute){  //balik ka sa line na toh
let productsObservable:Observable<productsi[]>;

  activatedRoute.params.subscribe((params) =>{
if(params.searchTerm)
productsObservable = this.productService.getAllProductsBySearchTerm(params.searchTerm);

else if (params.tag)
productsObservable = this.productService.getAllProductsByTag(params.tag);
else 
productsObservable = productService.getAll();

productsObservable.subscribe((serverProducts) =>{
  this.products = serverProducts;
})
}) //iniba yung sa tsconfig.json imbes true ginawang false//
//serverProducts is serverFoods
  
}
ngOnInit(): void {
    
}

}