import { Injectable } from '@angular/core';

import Product, { Category } from '../common/product.model';

@Injectable()
export class CartService {
  getTotalPrice(products: Array<Product>): number {
    return products.reduce(
      (prev: number, cur: Product) => prev + cur.price,
      0
    );
  }

  buyItems(products: Array<Product>): void {
    const totalPrice = this.getTotalPrice(products);
    const message = `
      You bougth ${products.length} game(s).
      Total price: ${totalPrice}
    `;

    alert(message);
  }
}
