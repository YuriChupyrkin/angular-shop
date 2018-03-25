import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as _ from 'lodash';

import Product from '../common/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() items: Array<Product> = [];
  @Output() buyItems: EventEmitter<Array<Product>> =
    new EventEmitter<Array<Product>>();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(product: Product): void {
    this.buyItems.emit(this.items);
  }

  onRemoveItem(product: Product): void {
    console.log('remove: ', product.name);
    const index = _.findIndex(this.items, {name: product.name});
    this.items.splice(index, 1);
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice(this.items);
  }
}
