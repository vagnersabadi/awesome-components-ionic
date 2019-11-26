import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFabModalPage } from './popup-fab-modal.page';

describe('PopupFabModalPage', () => {
  let component: PopupFabModalPage;
  let fixture: ComponentFixture<PopupFabModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupFabModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFabModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
