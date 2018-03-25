import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

import * as $ from 'jquery';

import CartItem from '../cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem: CartItem;
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() addItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    $(event.target).addClass('active-item');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: Event) {
    $(event.target).removeClass('active-item');
  }

  onRemove(): void {
    this.removeItem.emit(this.cartItem);
  }

  onAdd(): void {
    this.addItem.emit(this.cartItem);
  }
}
