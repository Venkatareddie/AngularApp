import { Component } from '@angular/core';
import products_data from './products_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgxPaginationModule, FormsModule,FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

  fastar = faStar;
  productsOriginal = products_data; // Keep a copy for reset/search
  productsArr = [...this.productsOriginal];
  p: number = 1;
  
  byName: string = '';
  sortBy: string = 'asc';
  sortBydesc: string = 'desc';
  sortAsc(sortBy:string) {
    this.productsArr.sort((a, b) => a.price - b.price);
  }

  sortDesc(sortBydesc:string) {
    this.productsArr.sort((a, b) => b.price - a.price);
  }

  searchByItem() {
    const name = this.byName.toLowerCase();
    this.productsArr = this.productsOriginal.filter((p) =>
      p.category.toLowerCase().includes(name)
    );
  }
}
