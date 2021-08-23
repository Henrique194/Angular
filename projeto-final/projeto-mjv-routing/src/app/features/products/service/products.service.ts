import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [];

  filteredProducts: Array<ProductModel> = this.products;

  constructor(private httpClient: HttpClient) { }


  getProducts() {
    return this.httpClient.get<ProductModel[]>(environment.baseProductURL);
  }

  searchProductByName(name: string) {
    return this.httpClient.get<ProductModel>(environment.baseProductURL + 'product?name=' + name);
  }

  searchProductById(id: number) {
    return this.httpClient.get<ProductModel>(environment.baseProductURL + 'product?id=' + id.toString());
  }

  // searchByIdentifier(event: any): boolean { // Array Ou Elemento Do Array?
  //   const input = event.target.value.toUpperCase();

  //   if(input) {
  //     this.filteredProducts = this.products.filter(product => product.identifier === input);
  //     return true;
  //   }
  //   return false;
  // }

  }

  

