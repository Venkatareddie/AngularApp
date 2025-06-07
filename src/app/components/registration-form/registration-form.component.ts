import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

  user = {
    name: "venkat",
    gender: '',
    course1: false,
    course2: false,
    course3: false,
    course4: false,
    mode: '',
    desc:''
    
  }
  
  submitForm(userForm:NgForm) {
    console.log(userForm.value)
  }

}
