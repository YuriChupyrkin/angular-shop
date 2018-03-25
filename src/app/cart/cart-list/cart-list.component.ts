import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import CartItem from '../cart-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  cartItems: Array<CartItem> = new Array<CartItem>();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.cartItemsChanel$
      .subscribe((data) => {
        this.cartItems = Object.keys(data)
          .map((key) => data[key]);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBuy(): void {
    this.cartService.buyItems();
  }

  onRemoveItem(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem);
  }

  onAddItem(cartItem: CartItem): void {
    this.cartService.addItem(cartItem);
  }

  onClear() {
    this.cartService.clearItems();
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
