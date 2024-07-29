import { Injectable } from '@angular/core';
import { productsi } from '../shared/productsi'; 
import { Tag } from '../shared/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRODUCTS_BY_SEARCH_URL, PRODUCTS_ID_URL, PRODUCTS_TAGS_URL, PRODUCTS_TAG_URL, PRODUCTS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<productsi[]> {
    return this.http.get<productsi[]>(PRODUCTS_URL);
  }

  getAllProductsBySearchTerm(searchTerm: string): Observable<productsi[]> {
    return this.http.get<productsi[]>(PRODUCTS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(PRODUCTS_TAGS_URL );
  }

  getAllProductsByTag(tag: string): Observable<productsi[]> {
    return tag === "All" ? this.getAll() : this.http.get<productsi[]>(PRODUCTS_TAG_URL + '/' + tag);
  }

  getProductsById(productId: string): Observable<productsi> {
    return this.http.get<productsi>(PRODUCTS_ID_URL + productId);
  }
}
