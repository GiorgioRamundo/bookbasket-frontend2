import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbasketAlternativeHomeComponent } from './bookbasket-alternative-home.component';

describe('BookbasketAlternativeHomeComponent', () => {
  let component: BookbasketAlternativeHomeComponent;
  let fixture: ComponentFixture<BookbasketAlternativeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbasketAlternativeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbasketAlternativeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
