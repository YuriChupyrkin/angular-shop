import { Injectable } from '@angular/core';

import Product, { Category } from '../common/product.model';

@Injectable()
export class CartService {
  prepareToDrawItems(products: Array<Product>): Array<string> {
    const productMap = {};
    products.forEach((product: Product) => {
      if (productMap[product.name]) {
        productMap[product.name].price += product.price;
        productMap[product.name].count += 1;
      } else {
        productMap[product.name] = {
          price: product.price,
          count: 1,
        };
      }
    });

    const mapKeys = Object.keys(productMap);
    const formattedListString = mapKeys.map((key: string) => {
      return `${key}(x${productMap[key].count}): ${productMap[key].price}$`;
    });

    return formattedListString;
  }

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
