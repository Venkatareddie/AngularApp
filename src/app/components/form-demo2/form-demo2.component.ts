import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {

  user = {
    name: "venkat",
    email: "venkat@gmail.com",
    gender: "male",
    address: {
      street: '',
      city: '',
      pincode:12345
    }
    
  }

  submitForm(userForm: NgForm) {
    console.log(userForm); //We can see  detail information
    console.log(userForm.value); //Only see the object details information
  }

}
