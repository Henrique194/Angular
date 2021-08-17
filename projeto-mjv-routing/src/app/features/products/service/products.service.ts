import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Array<ProductModel> = [
    { name: 'notebook acer',
      price: 5999,
      img: "https://acerstore.vteximg.com.br/arquivos/ids/156817-900-900/AN515-54.jpg?v=637257706315470000",
      identifier: 'ACER',
      specs: '',
    },
    { name: 'notebook dell',
      price: 3999,
      img: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/multiview_new_size_hellcat_5.png",
      identifier: 'DELL',
      specs: '',
    },
    { name: 'notebook samsung',
      price: 2579,
      img: "https://images.samsung.com/is/image/samsung/p6pim/br/xe310xba-kt2br/gallery/br-chromebook-4-xe310xbai-xe310xba-kt2br-337284531?$684_547_PNG$",
      identifier: 'SAMSUNG',
      specs: '',
    }
  ]

  filteredProducts: Array<ProductModel> = this.products;

  constructor() { }


  getProducts(): Array<ProductModel> {
    return this.products;
  }

  searchProductByName(name: string): Array<ProductModel> {
    return this.products.filter(product => product.name.includes(name));
  }

  findByName(name: string): ProductModel | undefined {
    return this.products.find(product => product.name === name);
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

  

