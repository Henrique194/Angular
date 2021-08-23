import { Component, ElementRef, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];
  hasProducts: boolean = false;

  constructor(
    private productService: ProductsService) { 
     }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( products => {
      this.products = products;
      this.filteredProducts = this.products;
      this.hasProducts = true;
    });
    
    
  }

  searchProductByName(event: any) {    
    const input = event.target.value.toLowerCase();
    if(input) {
      this.filteredProducts = this.products.filter(product => product.name.includes(input));
      if (this.filteredProducts.length === 0) { this.hasProducts = false; }
      console.log(this.hasProducts);
      
    } else {
      this.filteredProducts = this.products;
      this.hasProducts = true;
    }
  }

  // generic() {
  //   const gen = this.document.getElementById("generic");

  //   if(gen) {
  //     let innerHTML = gen.innerHTML;
  //     if(innerHTML === 'generic') gen.innerHTML = 'genericFunction';
  //     else gen.innerHTML = 'generic'
      
  //   }
  // }

}
