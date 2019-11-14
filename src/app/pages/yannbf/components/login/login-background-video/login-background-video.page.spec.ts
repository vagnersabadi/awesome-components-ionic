import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBackgroundVideoPage } from './login-background-video.page';

describe('LoginBackgroundVideoPage', () => {
  let component: LoginBackgroundVideoPage;
  let fixture: ComponentFixture<LoginBackgroundVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBackgroundVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBackgroundVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
