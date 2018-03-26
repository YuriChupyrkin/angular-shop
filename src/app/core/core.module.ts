import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './local-storage.service';
import { ConfigOptionsService } from './config-options.service';

@NgModule({
  declarations: [
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CoreModule { }
