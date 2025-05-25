import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child2-employee.component.html',
  styleUrls: ['./child2-employee.component.css'],
  outputs: ['add']  
})
export class Child2EmployeeComponent {

  add = new EventEmitter<any>();

  name = '';
  gender = '';
  salary: number | null = null;

  submit() {
    if (this.name && this.gender && this.salary != null) {
      this.add.emit({ name: this.name, gender: this.gender, salary: this.salary });
      this.name = '';
      this.gender = '';
      this.salary = null;
    }
  }
}
