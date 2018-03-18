import { Component } from '@angular/core';

import Product from './common/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartItem: Array<Product> = [];

  constructor() {}

  onAddToCart(product: Product): void {
    console.log(`onAddToCart: ${product.name}`);
    this.cartItem.push(product);
  }
}
