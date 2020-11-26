import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCTransacComponent } from './pctransac.component';

describe('PCTransacComponent', () => {
  let component: PCTransacComponent;
  let fixture: ComponentFixture<PCTransacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCTransacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCTransacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
