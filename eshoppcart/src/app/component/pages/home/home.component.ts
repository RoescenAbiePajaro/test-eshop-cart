import { Component, OnInit } from '@angular/core';
import { productsi } from '../../../shared/productsi';
import { ProductService, } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products:productsi[] = []; //products to this.products
constructor(private productService:ProductService, activatedRoute:ActivatedRoute){  //balik ka sa line na toh
activatedRoute.params.subscribe((params) =>{
if(params.searchTerm)
this.products = this.productService.getAllProductsBySearchTerm(params.searchTerm);

else if (params.tag)
this.products = this.productService.gwtAllProductsByTag(params.tag);
else this.products = productService.getAll();
}) //iniba yung sa tsconfig.json imbes true ginawang false//

  
}
ngOnInit(): void {
    
}

}