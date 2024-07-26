import { Injectable } from '@angular/core';
import { productsi } from '../shared/productsi'; 
import { sample_products } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():productsi[]{  // Food from Food.ts which is productsi
    return sample_products;
  }    
}
