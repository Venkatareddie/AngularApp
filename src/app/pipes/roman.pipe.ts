import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(num: number): string {
    if (num < 1 || num > 3999) return '';
    const map: [number, string][] = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let res = ''; //Empty String for to keep all
    for (const [val, sym] of map) {
      while (num >= val) { // It will iterate until condition become false
        res += sym;
        num -= val;
      }
    }
    return res;
  }
}
