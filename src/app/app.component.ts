import { Component } from '@angular/core';

import Product from './common/product.model';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartItems: Array<Product> = [];

  constructor(private cartService: CartService) {}

  onAddToCart(product: Product): void {
    console.log(`onAddToCart: ${product.name}`);
    this.cartItems.push(product);
  }

  onBuyProducts(products: Array<Product>): void {
    this.cartService.buyItems(products);
    this.cartItems = new Array<Product>();
  }
}
