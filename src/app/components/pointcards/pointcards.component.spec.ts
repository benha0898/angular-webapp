import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointcardsComponent } from './pointcards.component';

describe('PointcardsComponent', () => {
  let component: PointcardsComponent;
  let fixture: ComponentFixture<PointcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
