import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductsService } from './product/products.service';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
  ],
  providers: [
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
