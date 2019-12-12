import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBackgroundSliderPage } from './login-background-slider.page';

describe('LoginBackgroundSliderPage', () => {
  let component: LoginBackgroundSliderPage;
  let fixture: ComponentFixture<LoginBackgroundSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBackgroundSliderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBackgroundSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
