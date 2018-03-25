import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
  ],
  exports: [
    ProductsComponent,
  ],
})
export class ProductsModule { }
