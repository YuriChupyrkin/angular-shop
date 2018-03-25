import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartService } from './cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  providers: [
    CartService,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
  ]
})
export class CartModule { }
