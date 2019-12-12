import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOnePage } from './login-one.page';

describe('LoginOnePage', () => {
  let component: LoginOnePage;
  let fixture: ComponentFixture<LoginOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
