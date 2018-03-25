import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import Product, { Category } from '../common/product.model';
import CartItem from './cart-item.model';

@Injectable()
export class CartService {
  private cartItemsChanel: Subject<any> =
    new Subject<any>();
  public cartItemsChanel$ =
    this.cartItemsChanel.asObservable();

  private cartItems: any = {};

  getTotalPrice(): number {
    const totalPrice = Object
      .keys(this.cartItems)
      .reduce((prev, next) => {
        const cartItem = this.cartItems[next];
        return prev + cartItem.price * cartItem.count;
      }, 0);

    return totalPrice;
  }

  getTotalCount(): number {
    const totalCount = Object
      .keys(this.cartItems)
      .reduce((prev, next) => {
        const cartItem = this.cartItems[next];
        return prev + cartItem.count;
      }, 0);

    return totalCount;
  }

  addToCart(product: Product) {
    if (this.cartItems[product.name]) {
      this.cartItems[product.name].count++;
    } else {
      this.cartItems[product.name] = new CartItem(product);
      this.cartItemsChanel.next(this.cartItems);
    }
  }

  addItem(cartItem: CartItem): void {
    if (!this.cartItems[cartItem.name]) {
      return;
    }

    this.cartItems[cartItem.name].count++;
  }

  removeItem(cartItem: CartItem): void {
    if (!this.cartItems[cartItem.name]) {
      return;
    }

    if (this.cartItems[cartItem.name].count > 1) {
      this.cartItems[cartItem.name].count--;
    } else {
      delete this.cartItems[cartItem.name];
      this.cartItemsChanel.next(this.cartItems);
    }
  }

  buyItems(): void {
    const totalPrice = this.getTotalPrice();
    const totalCount = this.getTotalCount();
    const message = `
      You bougth ${totalCount} game(s).
      Total price: ${totalPrice}$.
    `;

    alert(message);
    this.clearItems();
  }

  clearItems(): void {
    this.cartItems = {};
    this.cartItemsChanel.next(this.cartItems);
  }
}
