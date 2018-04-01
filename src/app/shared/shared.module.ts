import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFriendlyDirective } from './directives/read-friendly.directive';


@NgModule({
  declarations: [
    UserFriendlyDirective,
  ],
  providers: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UserFriendlyDirective,
  ]
})
export class SharedModule { }
