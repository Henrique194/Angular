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
    if(this.product){
      const capitalizedName = this.capitalizeProductName(this.product.name);
      alert(capitalizedName + ' foi adicionado ao carrinho!');
    }
    
  }

  capitalizeProductName(string : string) : string {
    const firstChar = string.charAt(0).toUpperCase();
    const spaceIndex = string.search(/\s/);
    const charAfterSpace = string.charAt(spaceIndex + 1).toUpperCase();
    const stringFormatted = string.replace(/\w/, `${firstChar}`).replace(/\s\w/, ` ${charAfterSpace}`);
    return stringFormatted;
  }

}
