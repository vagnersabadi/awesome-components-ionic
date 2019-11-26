import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupModalPage } from './signup-modal.page';

describe('SignupModalPage', () => {
  let component: SignupModalPage;
  let fixture: ComponentFixture<SignupModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
