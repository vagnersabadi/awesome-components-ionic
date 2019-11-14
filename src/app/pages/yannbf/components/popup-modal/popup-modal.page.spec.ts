import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModalPage } from './popup-modal.page';

describe('PopupModalPage', () => {
  let component: PopupModalPage;
  let fixture: ComponentFixture<PopupModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
