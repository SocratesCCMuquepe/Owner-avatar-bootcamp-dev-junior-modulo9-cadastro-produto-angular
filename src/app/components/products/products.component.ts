import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  categories: Category[] = [
    {
      id: 1,
      name: "Produção Própria"
    },
    {
      id: 2,
      name: "Nacional"
    },
    {
      id: 3,
      name: "Importada"
    },
    {
      id: 4,
      name: "Premiun"
    }
  ];

  product : Product = {} as Product;
  products : Product[] = [];

  saveProduct(){

    this.product.id = this.products.length + 1;
    this.products.push(this.product);
    this.product = {} as Product;

    console.log("Salvando producto : " + this.products.length)
  }

}
