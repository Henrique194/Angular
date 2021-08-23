import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: ProductModel[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
