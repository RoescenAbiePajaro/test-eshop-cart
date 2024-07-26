import { Injectable } from '@angular/core';
import { productsi } from '../shared/productsi'; 
import { sample_products, sample_tags } from '../../data';
import { Tag } from '../shared/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }

  getAll():productsi[]{  // Food from Food.ts which is productsi.ts
    return sample_products; //sa data.ts itong sample_products
  }    
  getAllProductsBySearchTerm(searchTerm:string){
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags():Tag[]{
    return sample_tags;
  }
  gwtAllProductsByTag(tag:string):productsi[]{
    return tag == "All"?
    this.getAll():
     this.getAll().filter(product => product.tags?.includes(tag));
  }

  getProductsById(productId:string):productsi{
    return this.getAll().find(product => product.id == productId)?? new productsi();
  }
}
