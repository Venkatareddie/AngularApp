import { Injectable } from '@angular/core';
import { EmployeeModel } from '../employee-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private employeeList: EmployeeModel[] = [];

  private employeesSubject = new BehaviorSubject<EmployeeModel[]>([]);
  employees$ = this.employeesSubject.asObservable();

  addEmployee(employee: EmployeeModel) {
    this.employeeList.push(employee);
    this.employeesSubject.next(this.employeeList);
  }

  deleteEmployee(id: number) {
    this.employeeList = this.employeeList.filter((emp) => emp.id !== id);
    this.employeesSubject.next(this.employeeList);
  }

  clearEmployees() {
    this.employeeList = [];
    this.employeesSubject.next(this.employeeList);
  }
}
