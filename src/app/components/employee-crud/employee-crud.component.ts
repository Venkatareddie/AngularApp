import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import Swal from 'sweetalert2';
import { faPencil, faTrash, faEye, faPlusSquare, faUser} from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar';
import { edited_message, EMPLOYEE_ADDED_MESSAGE, found_duplicate, emplty_invalid_input} from '../../constants/message_constants';




@Component({
  selector: 'app-employee-crud',
  imports: [FontAwesomeModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {

  //Employee Object

  employees = [
    { id: 1, name: 'Venkata Reddy', department: 'Engineering', salary: 60000 },
    { id: 2, name: 'Swathi', department: 'Marketing', salary: 50000 },
    { id: 3, name: 'Vijay', department: 'Finance', salary: 55000 }
  ];

  //Assigning fontawesome symbol to the variables

  faPencil = faPencil
  faTrash = faTrash
  faEye = faEye
  faPlusSquare = faPlusSquare
  faUser=faUser
  
  //logic for view the deleting the employee

  deleteEmployee(id: number) {
    const confirmDelete = confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      this.employees = this.employees.filter(emp => emp.id !== id);
    }
  }

  selectedEmployee: any = null;

  //logic for view the existing employee

  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
  }

  //fontawesome for edit employee when modified successfully

  openEditEmployee() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: edited_message
    });
  }

  //Fontawesome for any duplicates presents in employee object

  foundDuplicate()
  {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: found_duplicate,
        showConfirmButton: false,
        timer: 1500
      });
  }

  fieldsMustPresent() {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: emplty_invalid_input,
      showConfirmButton: false,
      timer: 1500
    });
  }
  
  //Snackbar  when employee added into the employee object.

  openSaveEmployee() {
    new Snackbar(EMPLOYEE_ADDED_MESSAGE,
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: '' }
    );
  }
  
  //Adding the employee into an employee object

    addEmployee() {
      const idInput = prompt("Enter Employee ID:");
      const name = prompt("Enter Employee Name:");
      const department = prompt("Enter Department:");
      const salaryInput = prompt("Enter Salary:");
    
      const id = Number(idInput);
      const salary = Number(salaryInput);
    
      // Check for empty or invalid inputs
      if (!idInput || !name || !department || !salaryInput || isNaN(id) || isNaN(salary)) {
        this.fieldsMustPresent();
        return;
      }
    
      // Check for duplicate ID
      const exists = this.employees.find(emp => emp.id === id);
      if (exists) {
        this.foundDuplicate();
        return;
      }
    
      // Add employee
      this.employees.push({ id, name, department, salary });
      this.openSaveEmployee();
    }
    
 
  //Modifying the existing employee

    editEmployee(id: number) {
      // Find employee by id
      const emp = this.employees.find(e => e.id === id);
      if (!emp) {
        alert("Employee not found!");
        return;
      }
    
      const name = prompt("Enter Employee Name:", emp.name);
      const department = prompt("Enter Department:", emp.department);
      const salaryInput = prompt("Enter Salary:", emp.salary.toString());
    
      const salary = Number(salaryInput);
    
      if (!name || !department || !salaryInput || isNaN(salary)) {
        alert("Please enter valid details.");
        return;
      }
    
      // Update employee info
      emp.name = name;
      emp.department = department;
      emp.salary = salary;
    
      this.openEditEmployee(); // show success message
    }
}
