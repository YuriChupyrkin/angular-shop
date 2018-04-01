import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ProductsService,
  ],
  exports: [
    ProductsComponent,
  ],
})
export class ProductsModule { }
