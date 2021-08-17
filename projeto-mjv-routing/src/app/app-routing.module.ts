import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { ProductDetailPageComponent } from './features/products/pages/product-detail-page/product-detail-page.component';
import { ProductsPageComponent } from './features/products/pages/products-page/products-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products'},
  { path: 'products', component: ProductsPageComponent, canActivate: [AuthGuard] },
  { path: 'products-details/:id', component: ProductDetailPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
