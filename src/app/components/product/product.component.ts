import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  categories: Category[] = [];

  @Input()
  product ?: Product;

  save(){
    console.log(this.product);
  }

}
