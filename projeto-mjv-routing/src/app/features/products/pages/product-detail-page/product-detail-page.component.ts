import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapitalizeProductNamePipe } from 'src/app/shared/pipes/capitalize-product-name.pipe';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../service/products.service';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  product?: ProductModel;
  document: HTMLDocument = this.elementRef.nativeElement.ownerDocument;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private capitalizedPipe: CapitalizeProductNamePipe,
    private elementRef: ElementRef,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.productService.searchProductByName(param.name).subscribe( product => {
        const name = this.capitalizedPipe.transform(product.name);
        this.product = product;
        this.product.name = name;
      }, err => { console.log(err);
      });
    });
  }


  showDescription() {
    const hmtlPage: HTMLElement | null = this.document.getElementById("description");
    if(hmtlPage) {
      console.log(hmtlPage);
      hmtlPage.style.transition = "visibility 5s";
      hmtlPage.style.position = "static";
      hmtlPage.style.visibility = "visible";
    }
  }
}
