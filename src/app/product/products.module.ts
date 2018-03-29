import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsService } from './products.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [
    ProductsService,
  ],
  exports: [
    ProductsComponent,
  ],
})
export class ProductsModule { }
