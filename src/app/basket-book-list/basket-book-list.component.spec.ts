import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketBookListComponent } from './basket-book-list.component';

describe('BasketBookListComponent', () => {
  let component: BasketBookListComponent;
  let fixture: ComponentFixture<BasketBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
