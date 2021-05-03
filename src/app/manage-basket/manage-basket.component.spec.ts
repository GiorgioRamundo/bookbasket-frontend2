import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBasketComponent } from './manage-basket.component';

describe('ManageBasketComponent', () => {
  let component: ManageBasketComponent;
  let fixture: ComponentFixture<ManageBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
