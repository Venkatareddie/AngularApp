import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1-employee',
  imports: [],
  templateUrl: './child1-employee.component.html',
  styleUrl: './child1-employee.component.css',
  inputs: ['employees'],
  outputs:['delete']
  
})
export class Child1EmployeeComponent {
  employees: any[] = [];
  delete = new EventEmitter<number>();

}

