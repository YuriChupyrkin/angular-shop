import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import Product from '../common/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() items: Array<Product> = [];

  constructor() { }

  ngOnInit() {
  }

  onBuy(product: Product): void {
    console.log('add product!!');
  }
}
