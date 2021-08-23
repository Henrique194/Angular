import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RemoveBoldDirective } from './directives/remove-bold.directive';
import { CapitalizeProductNamePipe } from './pipes/capitalize-product-name.pipe';
import { ReactiveFormsModule } from '@angular/forms';


const components = [
  HeaderComponent,
  FooterComponent,
  
];

const pipes = [
  CapitalizeProductNamePipe,
]

const directives = [
  RemoveBoldDirective,
]

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    CapitalizeProductNamePipe,
  ],
  exports: [
    ...components,
    ...directives,
    ...pipes,
  ]
})
export class SharedModule { }
