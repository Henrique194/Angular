import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  ProductCardComponent,
  ProductListComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ...components
  ]
})
export class ProductsModule { }
