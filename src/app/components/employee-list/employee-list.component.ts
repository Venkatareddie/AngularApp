import { Component } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { EmployeeModel } from '../../employee-model';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees: EmployeeModel[] = [];

  constructor(private employeeService: EmpService) {}

  ngOnInit() {
    this.employeeService.employees$.subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }

  clearAll() {
    this.employeeService.clearEmployees();
  }

}
