import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1EmployeeComponent } from './child1-employee.component';

describe('Child1EmployeeComponent', () => {
  let component: Child1EmployeeComponent;
  let fixture: ComponentFixture<Child1EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1EmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
