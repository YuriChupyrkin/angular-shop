import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Constants, ConstantsService } from './constants.service';
import { LocalStorageService } from './local-storage.service';
import { ConfigOptionsService } from './config-options.service';
import { GeneratorService, generatorN } from './generator.service';
//import { UserFriendlyDirective } from './directives/read-friendly.directive';


@NgModule({
  declarations: [
    // Do we need to add this directive in "declaration"
    //UserFriendlyDirective,
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstantsService, useValue: Constants },
    { provide: GeneratorService, useFactory: generatorN(64) },
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CoreModule { }
