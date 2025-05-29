import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient:HttpClient) { }

  getEmployees():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>("http://localhost:3000/employees");
  }
  

}
