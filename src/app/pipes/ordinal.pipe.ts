import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(arr: number[]):string[] {
    
    return arr.map(num => {
      const s = ["th", "st", "nd", "rd"];
      const v = num % 100;
      const suffix = (num >= 11 && num <= 14) ? 'th' : s[num % 10] || 'th';
      return num + suffix;
    })
  }
  

//21st, 22nd,23rd,24th
}
