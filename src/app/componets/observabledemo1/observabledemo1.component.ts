import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observabledemo1',
  imports: [CommonModule],
  templateUrl: './observabledemo1.component.html',
  styleUrl: './observabledemo1.component.css'
})
export class Observabledemo1Component {

  constructor() { }

  ngOnInit() {
    this.create_observable();
    this.interval_Demo();
    this.from_demo();
  }
  create_observable() {
    let publisherl = new Observable((producer) => {
      producer.next("AAAAAA");
      producer.next("BBBB");
      producer.next("CC");
    });
  

    //   let subscriberl = publisherl.subscribe((partialResponse) => {
    //     console.log("Partial Response :" + partialResponse);
    //   },
    //     (error) => {
    //       console.log("Something wrong", error);
      
    //     },

    //     () => {
    //       console.log("Everything done")
    //     }
    // )}


    let subscriberl1 = publisherl.subscribe({
      next: (partialResponse) => { console.log("Partial Response :" + partialResponse) },
      error: (error) => { console.log("Something wrong", error) },
      complete: () => { console.log("Everything done") }
      
    })
  
  }
  numPublisher:any;

    interval_Demo() {
       this.numPublisher = interval(1000);
  }
  
  fruitsArr = ['Apple', 'Mango', 'Banana'];
  subscribeArr: any;

  from_demo() {
    let fromFruitArr = from(this.fruitsArr);
    let subscribeArr=fromFruitArr.subscribe((data)=>console.log(data))
  }

}
