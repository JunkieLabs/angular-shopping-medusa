import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductDashboardComponent } from './new-product-dashboard.component';

describe('NewProductDashboardComponent', () => {
  let component: NewProductDashboardComponent;
  let fixture: ComponentFixture<NewProductDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductDashboardComponent]
    });
    fixture = TestBed.createComponent(NewProductDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
