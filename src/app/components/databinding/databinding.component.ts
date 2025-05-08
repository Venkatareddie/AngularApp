import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule, CommonModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  username: string = "venkatsingatala";

  img_url: string = 'https://media.gettyimages.com/id/110022215/photo/group-b-2011-icc-world-cup.jpg?s=612x612&w=gi&k=20&c=EE4JlD8exE33eH498PFA9hGxFmecnwbIy0MAGQn_toA=';

  flag: boolean = false
  
  f1() {
    alert("Hello Guru");
  }

  num1: number = 1
  num2: number = 1
  
  addNum: number = 0
  addNumbers(n1: string | number, n2: string | number) {
    this.addNum = +n1 + +n2
  }
  myColSpanVal: number = 2

  // **************************************************************************
  
  nm: string = 'venkat'; // A name variable
  f: boolean = false;    // A flag to control visibility

  f2() {
    this.f = !this.f;    // Toggle the flag value when the button is clicked
  }

  state: string = "";



  message: string = '';
  max_length = 100;


  //Increment, Decrement, Reset

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

inputType = 'password';  // Initial type is password
buttonText = 'Show Text';  
  
toggleInputType() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
      this.buttonText = 'Show Password';  // Change button text to 'Show Password'
    } else {
      this.inputType = 'password';
      this.buttonText = 'Show Text';  // Change button text to 'Show Text'
    }
  }

  isDarkMode = false;  // Default to light mode

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }
}
// ******************************************************************************

