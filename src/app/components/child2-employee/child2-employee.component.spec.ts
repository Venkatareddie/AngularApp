import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2EmployeeComponent } from './child2-employee.component';

describe('Child2EmployeeComponent', () => {
  let component: Child2EmployeeComponent;
  let fixture: ComponentFixture<Child2EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child2EmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child2EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
