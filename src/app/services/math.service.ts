import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  add(a: number, b: number) {
    return `Addition of two numbers ${a} and ${b}  is ${a + b}`
  }
  sub(a: number, b: number) {
    return `Subtraction of two numbers ${a} and ${b}  is ${a - b}`;
  }
  multi(a: number, b: number) {
    return `Multiplication of two numbers ${a} and ${b}  is ${a * b}`;
  }
  
  }