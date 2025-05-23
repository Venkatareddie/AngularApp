import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a'],
  outputs:['phoneEvent']
})
export class Child1Component {

  a: any;
  username: string = "Venkata Singatala";
  phoneNum = "314-486-5243";

  phoneEvent = new EventEmitter();
  sendPhoneToParent()
  {
    this.phoneEvent.emit(this.phoneNum);
  }
}
