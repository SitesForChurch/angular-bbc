import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipsis'
})
export class Elipsis implements PipeTransform {

  transform(val, args) {
    if (args === undefined) {
      return val;
    }

    if (val.length > args) {
      return val.substring(0, args) + '...';
    } else {
      return val;
    }
  }

}
