import { Component } from '@angular/core';
import { DatabindingComponent } from "../databinding/databinding.component";
import { DirectivesComponent } from "../directives/directives.component";
import { UsersComponent } from '../users/users.component';
import { ProductsComponent } from '../products/products.component';
import { MyModelComponent } from "../my-model/my-model.component";
import { DemoComponent } from "../demo/demo.component";
import { ZoominDirective } from '../../directives/zoomin.directive';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from "../parent/parent.component";
import { CategoriesComponent } from "../categories/categories.component";
import { ParentEmployeeComponent } from "../parent-employee/parent-employee.component";


@Component({
  selector: 'app-body',
  imports: [
    ParentEmployeeComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
