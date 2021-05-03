import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbasketHomeComponent } from './bookbasket-home.component';

describe('BookbasketHomeComponent', () => {
  let component: BookbasketHomeComponent;
  let fixture: ComponentFixture<BookbasketHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbasketHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbasketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
