import { Component, ElementRef, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Array<ProductModel> = []
  document: HTMLDocument = this.elementRef.nativeElement.ownerDocument;

  constructor(
    private productService: ProductsService,
    private elementRef: ElementRef,
    ) { 
     }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    // console.log(this.elementRef);
  }

  searchProductByName(event: any) {
    const input = event.target.value.toLowerCase();
    if(input) {
      this.products = this.productService.searchProductByName(input);
    } else {
      this.products = this.productService.getProducts();
    }
  }

  generic() {
    const gen = this.document.getElementById("generic");

    if(gen) {
      let innerHTML = gen.innerHTML;
      if(innerHTML === 'generic') gen.innerHTML = 'genericFunction';
      else gen.innerHTML = 'generic'
      
    }
  }

}
