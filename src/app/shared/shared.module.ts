import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFriendlyDirective } from './directives/read-friendly.directive';
import { OrderByPipe } from './pipes/order-by-pipe';

@NgModule({
  declarations: [
    UserFriendlyDirective,
    OrderByPipe,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UserFriendlyDirective,
    OrderByPipe,
  ]
})
export class SharedModule { }
