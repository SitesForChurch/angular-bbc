import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateObj'
})
export class DateObj implements PipeTransform {

  transform(date: any) {
    return new Date(date);
  }

}
