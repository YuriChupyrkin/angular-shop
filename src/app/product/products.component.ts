import { Component, OnInit } from '@angular/core';

import Product from '../common/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.loadProduct();
  }

}
