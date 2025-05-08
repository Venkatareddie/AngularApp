import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  username: string = "venkatsingatala";

  img_url: string = 'https://media.gettyimages.com/id/110022215/photo/group-b-2011-icc-world-cup.jpg?s=612x612&w=gi&k=20&c=EE4JlD8exE33eH498PFA9hGxFmecnwbIy0MAGQn_toA=';

  flag: boolean = false
  
  f1()
  {
    alert("Hello Guru");
  }
}
