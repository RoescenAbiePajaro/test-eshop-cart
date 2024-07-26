import { Injectable } from '@angular/core';
import { productsi } from '../shared/productsi'; 
import { sample_products } from '../../data';

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
}
