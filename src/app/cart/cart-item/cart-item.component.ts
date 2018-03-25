import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

import * as $ from 'jquery';

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

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    $(event.target).addClass('active-item');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: Event) {
    $(event.target).removeClass('active-item');
  }

  onRemove(event: Event): void {
    event.preventDefault();
    this.removeItem.emit(this.item);
  }
}
