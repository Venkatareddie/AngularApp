import { Component } from '@angular/core';

@Component({
  selector: 'app-category-items',
  imports: [],
  templateUrl: './category-items.component.html',
  styleUrl: './category-items.component.css',
  inputs:['categoryItem']
})
export class CategoryItemsComponent {
  categoryItem: any;

}
