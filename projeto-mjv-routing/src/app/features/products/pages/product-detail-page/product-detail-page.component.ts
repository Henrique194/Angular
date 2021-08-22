import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  product?: ProductModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(param => {
      this.productService.searchProductByName(param.name).subscribe( product => {
        console.log(product);
        
        this.product = product;
      }, err => { console.log(err);
      });
    });

  }

}
