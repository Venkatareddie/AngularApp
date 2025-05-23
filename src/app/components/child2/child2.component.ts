import { Component, EventEmitter } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['b', 'child2_username'],
  outputs:['addEvent']
})
export class Child2Component {
  b:any;
  child2_username: any;
  userAddress: string = "Chennai";
  email: string = 'venkat@gmail.com';

  addEvent = new EventEmitter();
  sendAddressToParent() {
    this.addEvent.emit(this.userAddress);
  }
  
}