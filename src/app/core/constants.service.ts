import { InjectionToken } from '@angular/core';

const ConstantsService = new InjectionToken<Object>('ConstantsService');

const Constants = {
  App: 'Angular shop',
  Ver: '1.0'
};

export {
  Constants,
  ConstantsService
};
