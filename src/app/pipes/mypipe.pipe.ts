import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  pure:false
})
export class MypipePipe implements PipeTransform {

  transform(nums: any[]) {
    return nums.sort((a,b)=>a-b);
  }

}
