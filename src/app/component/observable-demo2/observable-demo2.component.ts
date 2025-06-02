import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin,mergeMap,of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [CommonModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit() {
    this.forkjoin_demo();
    this.mergemap_demo();
    this.concatmap_demo();
    
  }

  forkjoin_demo() {
    const url1 = "https://jsonplaceholder.typicode.com/users";
    const url2 = "https://jsonplaceholder.typicode.com/comments";
    const url3 = "https://jsonplaceholder.typicode.com/todos";

    let req1 = this.httpClient.get(url1);
    let req2 = this.httpClient.get(url2);
    let req3 = this.httpClient.get(url3);

    forkJoin([req1, req2, req3]).subscribe((response) => {
      console.log(response);
    }, error=> {
      console.log("Error found");
    })
  }

    //Won't ne maintain the order, Getting one  by one and passing into http request and subscribing one by one.

  mergemap_demo() {
    const userPublisher = of(1, 2, 3, 4, 5);
    //userPublisher.subscribe((response => console.log(response));

    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/products/${userId}`)
    })).subscribe(cardResponse => {
      console.log(cardResponse);
      
    })
  }

  //Maintain the order, Getting one  by one and passing into http request and subscribing one by one.

  concatmap_demo() {
    const userPublisher = of(1, 2, 3, 4, 5);
    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/products/${userId}`)
    })).subscribe(cardResponse => {
      console.log(cardResponse);
      
    })
  }
  

}
