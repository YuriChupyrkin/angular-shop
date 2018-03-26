import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Constants, ConstantsService } from './constants.service';
import { LocalStorageService } from './local-storage.service';
import { ConfigOptionsService } from './config-options.service';


@NgModule({
  declarations: [
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstantsService, useValue: Constants },
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CoreModule { }
