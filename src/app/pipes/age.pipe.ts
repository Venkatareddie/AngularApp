import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(bdy: Date |string): number {
    const birthDate = new Date(bdy);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  }

}
