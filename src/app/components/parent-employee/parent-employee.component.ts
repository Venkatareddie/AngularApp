import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1EmployeeComponent } from '../child1-employee/child1-employee.component';
import { Child2EmployeeComponent } from '../child2-employee/child2-employee.component';

@Component({
  selector: 'app-parent-employee',
  standalone: true,
  imports: [CommonModule, Child1EmployeeComponent, Child2EmployeeComponent],
  templateUrl: './parent-employee.component.html',
  styleUrls: ['./parent-employee.component.css']
})
export class ParentEmployeeComponent {
  employees = [
    { name: 'Venkat', gender: 'Male', salary: 50000 },
    { name: 'Swathi', gender: 'Female', salary: 90000 },
    { name: 'Vijay', gender: 'Male', salary: 35000 }
  ];

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.employees = [...this.employees];
  }

  addEmployee(emp: any) {
    this.employees.push(emp);
    this.employees = [...this.employees];
  }
}
