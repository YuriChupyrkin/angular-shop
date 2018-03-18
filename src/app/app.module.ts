import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductsService } from './product/products.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    ProductsService,
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
