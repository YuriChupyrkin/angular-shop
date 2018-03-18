import { Component, OnInit, Input } from '@angular/core';

import Product from '../../common/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() item: Product;

  constructor() { }

  ngOnInit() {
  }

  get itemPrice() {
    return `${this.item.price}$`;
  }

  onBuy(): void {
    console.log(`buy item: ${this.item.name}`);
  }
}
