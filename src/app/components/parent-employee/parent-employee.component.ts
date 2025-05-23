import { Component, signal } from '@angular/core';
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
  employees = signal([
    { name: 'John', gender: 'Male', salary: 50000 }
  ]);

  deleteEmployee(index: number) {
    const updated = [...this.employees()];
    updated.splice(index, 1);
    this.employees.set(updated);
  }

  addEmployee(emp: any) {
    this.employees.update((e: any[]) => [...e, emp]);
  }
}
