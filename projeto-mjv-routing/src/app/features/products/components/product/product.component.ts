import { Component, Input, OnInit } from '@angular/core';
import { CapitalizeProductNamePipe } from 'src/app/shared/pipes/capitalize-product-name.pipe';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  product?: ProductModel;

  constructor(private capitalizedPipe: CapitalizeProductNamePipe) { }

  ngOnInit(): void {
  }
  
  addToChart(): void {
    if(this.product){
      const productNameFormatted = this.capitalizedPipe.transform(this.product.name);
      alert(productNameFormatted + ' foi adicionado ao carrinho!');
    }
    
  }

}
