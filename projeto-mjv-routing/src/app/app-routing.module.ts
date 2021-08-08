import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { ProductDetailPageComponent } from './features/products/pages/product-detail-page/product-detail-page.component';
import { ProductsPageComponent } from './features/products/pages/products-page/products-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products'},
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/:id', component: ProductDetailPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
