import { Component } from '@angular/core';
import { EmployeeModel } from '../../employee-model';
import { EmpService } from '../../services/emp.service';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-add-employee',
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  id: number = 0;
  name: string = '';
  salary: number = 0;

  constructor(private employeeService: EmpService) {}

  addEmployee() {
    const newEmployee: EmployeeModel = {
      id: this.id,
      name: this.name,
      salary: this.salary
    };
    this.employeeService.addEmployee(newEmployee);
    this.id;
    this.name = '';
    this.salary;
  }

}
