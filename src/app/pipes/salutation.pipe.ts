import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  // transform(employee: any): string {
  //   if (!employee || !employee.name || !employee.gender) return '';
    
  //   const prefix = employee.gender.toLowerCase() === 'female' ? 'Miss.' : 'Mr.';
  //   return `${prefix} ${employee.name}`;
  transform(name: string , gender:string): string {
    if (!name || !gender) { return ''}
    const prefix = gender.toLowerCase() === 'female' ? 'Miss.' : 'Mr.';
    return `${prefix} ${name}`;
  }

}
