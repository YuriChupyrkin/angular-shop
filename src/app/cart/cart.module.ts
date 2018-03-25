import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [
    CartService,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartListComponent,
  ]
})
export class CartModule { }
