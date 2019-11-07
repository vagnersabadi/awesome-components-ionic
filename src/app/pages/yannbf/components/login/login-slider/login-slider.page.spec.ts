import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSliderPage } from './login-slider.page';

describe('LoginSliderPage', () => {
  let component: LoginSliderPage;
  let fixture: ComponentFixture<LoginSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSliderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
