import { Component, OnInit } from '@angular/core';

import Product from '../common/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.items = [];
  }

  onBuy(product: Product): void {
    console.log('add product!!');
  }
}
