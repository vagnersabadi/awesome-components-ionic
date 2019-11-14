import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInstagramPage } from './login-instagram.page';

describe('LoginInstagramPage', () => {
  let component: LoginInstagramPage;
  let fixture: ComponentFixture<LoginInstagramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInstagramPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInstagramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
