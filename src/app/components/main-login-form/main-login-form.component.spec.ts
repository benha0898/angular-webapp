import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoginFormComponent } from './main-login-form.component';

describe('MainLoginFormComponent', () => {
  let component: MainLoginFormComponent;
  let fixture: ComponentFixture<MainLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
