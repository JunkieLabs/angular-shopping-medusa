import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductCardListComponent } from './new-product-card-list.component';

describe('NewProductCardListComponent', () => {
  let component: NewProductCardListComponent;
  let fixture: ComponentFixture<NewProductCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductCardListComponent]
    });
    fixture = TestBed.createComponent(NewProductCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
