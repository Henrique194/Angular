import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(pa)
  }

}
