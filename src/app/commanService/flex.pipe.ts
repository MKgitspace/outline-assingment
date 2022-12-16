import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flex'
})
export class FlexPipe implements PipeTransform {

  transform(value: Number): Number {
    return Number(value);
  }
}
