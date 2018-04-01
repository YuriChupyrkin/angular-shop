import {Pipe, PipeTransform} from '@angular/core';

import * as _ from 'lodash';

@Pipe({
  name: 'orderby',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    const sortByProperty = args[0];
    const desc = args[1];

    if (!sortByProperty) {
      return  value;
    }

    if (desc === true) {
      value = _.orderBy(value, sortByProperty, 'desc');
    } else {
      value = _.orderBy(value, sortByProperty);
    }

    return  value;
  }
}
