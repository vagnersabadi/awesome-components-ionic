import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWithNavigationPage } from './modal-with-navigation.page';

describe('ModalWithNavigationPage', () => {
  let component: ModalWithNavigationPage;
  let fixture: ComponentFixture<ModalWithNavigationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWithNavigationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWithNavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
