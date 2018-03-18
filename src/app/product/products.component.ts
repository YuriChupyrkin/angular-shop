import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import Product from '../common/product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() buyItem: EventEmitter<Product> = new EventEmitter<Product>();
  products: Array<Product>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.loadProduct();
  }

  onBuy(product: Product): void {
    console.log(`product list: onBuy: ${product.name}`);
    this.buyItem.emit(product);
  }
}
