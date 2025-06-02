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

  id: number | null = null;
  name: string = '';
  salary: number | null = null;

  constructor(private empService: EmpService) {}

  addEmployee() {
    if (!this.name.trim() || !this.id || !this.salary) {
      alert('Please enter valid employee details.');
      return;
    }

    this.empService.addEmployee({
      id: this.id,
      name: this.name.trim(),
      salary: this.salary
    });

    // Reset form inputs (will show empty fields)
    this.id = null;
    this.name = '';
    this.salary = null;
  }

}
