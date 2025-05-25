import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  /*
 1. create an EmployeeService
   Service should have 1 variable.  ex: employees = [ {}, {}, {} {}]   
   Service should have 3 methods.   ex: getAllEmployees(), getMaleEmployees(), getFemaleEmployees()
 2. inject that service in EmployeeComponent
 3. Display List of Employees in a table / Card
    have a dropdown with 3 values- allEmployees , maleEmployees , femaleEmployees
    based on the dropdown value selected, employee data should be shown
  */
  
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  
  
getAllEmployees() {
  return this.employees; 
}

getMaleEmployees() {
  return this.employees.filter(emp => emp.gender === 'male'); 
}

getFemaleEmployees() {
  return this.employees.filter(emp => emp.gender === 'female'); 
}
}
