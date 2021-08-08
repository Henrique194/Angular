import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Array<ProductModel> = []

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  searchProductByName(event: any) {
    const input = event.target.value.toLowerCase();
    if(input) {
      this.products = this.productService.searchProductByName(input);
    } else {
      this.products = this.productService.getProducts();
    }
  }

}
