import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product?: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }
  
  addToChart(): void {
    alert(this.product?.name + ' foi adicionado ao carrinho!');
  }
}
