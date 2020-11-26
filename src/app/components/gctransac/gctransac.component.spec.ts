import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GctransacComponent } from './gctransac.component';

describe('GctransacComponent', () => {
  let component: GctransacComponent;
  let fixture: ComponentFixture<GctransacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GctransacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GctransacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
