import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(input:any,maxLength:number=100): unknown {
    return maxLength- input.length;
  }

}
