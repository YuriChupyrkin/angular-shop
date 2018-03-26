import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [
  ],
  providers: [
    LocalStorageService,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CoreModule { }
