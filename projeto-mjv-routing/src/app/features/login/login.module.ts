import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LoginModule { }
