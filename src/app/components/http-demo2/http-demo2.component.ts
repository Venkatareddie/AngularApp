import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-http-demo2',
  imports: [CommonModule, FormsModule],
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css'
})
export class HttpDemo2Component {

  AllEmployees: Employee[] = [];
  constructor(private employeesService: EmployeesService) { }
  
  ngOnInit(){
    this.employeesService.getEmployees().subscribe((response:Employee[]) => {
      this.AllEmployees = response
    })
  }
}
