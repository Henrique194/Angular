import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProductsModule { }
