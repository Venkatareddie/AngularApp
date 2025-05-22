import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { MypipePipe } from '../../pipes/mypipe.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { SeachnamePipe } from "../../pipes/seachname.pipe";




@Component({
  selector: 'app-pipes',
  imports: [CommonModule, FormsModule, RemainingPipe, MypipePipe, OrdinalPipe, RomanPipe, SalutationPipe, AgePipe, FormsModule, SeachnamePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  standalone:true
})
export class PipesComponent {
  salary: number = 5000;
  name: string = "VenkaT SiNgAtala"
  today: Date = new Date();

  users: object = { id: 101, name: "Venkat", add: "tennesee", email: "venkat@gmail.com" };
  
  numArr: number[] = [10, 20, 30, 40, 50];
  msg: string = '';
  msg2: string = '';

  nums = [10, 20, 30, 40, 15];
  nums1 = [10, 20, 30, 40, 15];
  
  arr: number[] = [21, 22, 23, 24]
  
  roman_numbers = [1, 4, 9, 12, 40, 58, 1999, 2023];

  bdy: string = '';

   employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  searchText: string = ''
  trackByEId(index: number, item: any): number {
    return item.eId;
  }
  

}
