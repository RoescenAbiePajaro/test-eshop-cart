import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/Tag';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(productService:ProductService){
    this.tags = productService.getAllTags();
  }

ngOnInit(): void{
}

}
