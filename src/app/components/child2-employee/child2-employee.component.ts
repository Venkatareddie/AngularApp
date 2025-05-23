import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2-employee',
  imports: [FormsModule],
  templateUrl: './child2-employee.component.html',
  styleUrl: './child2-employee.component.css'
})
export class Child2EmployeeComponent {
  @Output() add = new EventEmitter<any>();

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
