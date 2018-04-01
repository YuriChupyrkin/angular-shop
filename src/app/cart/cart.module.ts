import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SharedModule } from '../shared/shared.module';
import { OrderByPipe } from './../shared/pipes/order-by-pipe';
import { CartService } from './cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    OrderByPipe,
  ],
  providers: [
    CartService,
  ],
  imports: [
    CommonModule,
    //SharedModule,
  ],
  exports: [
    CartListComponent,
  ]
})
export class CartModule { }
