import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import Product from '../../common/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() item: Product;
  @Output() buyItem: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onBuy(): void {
    this.buyItem.emit(this.item);
  }

  get itemPrice() {
    return `${this.item.price}$`;
  }
}
