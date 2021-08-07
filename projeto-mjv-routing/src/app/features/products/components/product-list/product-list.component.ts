import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<ProductModel> = [
    { name: 'notebook acer',
      price: 5999,
      img: "https://acerstore.vteximg.com.br/arquivos/ids/156817-900-900/AN515-54.jpg?v=637257706315470000",
      identifier: 'ACER'
    },
    { name: 'notebook dell',
      price: 3999,
      img: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/multiview_new_size_hellcat_5.png",
      identifier: 'DELL'
    },
    { name: 'notebook samsung',
      price: 2579,
      img: "https://images.samsung.com/is/image/samsung/p6pim/br/xe310xba-kt2br/gallery/br-chromebook-4-xe310xbai-xe310xba-kt2br-337284531?$684_547_PNG$",
      identifier: 'SAMSUNG'
    }
  ]

  filteredProducts: Array<ProductModel> = this.products;

  searchProduct(event: any): void {
    //console.log(event);
    const input = event.target.value.toLowerCase();
    console. log(input);
    if(input){
      this.filteredProducts = this.products.filter( (product) => product.name.includes(input));
    } else {
      this.filteredProducts = this.products;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
