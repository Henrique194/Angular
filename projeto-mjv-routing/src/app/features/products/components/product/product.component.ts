import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  product?: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }
  
  addToChart(): void {
    alert(this.product?.name + ' foi adicionado ao carrinho!');
  }
}
