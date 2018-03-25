import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    CartComponent,
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
