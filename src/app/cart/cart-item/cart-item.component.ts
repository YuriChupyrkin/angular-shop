import { Component, Input, Output, EventEmitter } from '@angular/core';

import Product from '../../common/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item: Product;
  @Output() removeItem: EventEmitter<Product> =
    new EventEmitter<Product>();

  constructor() { }

  onRemove(event: any): void {
    event.preventDefault();
    this.removeItem.emit(this.item);
  }
}
