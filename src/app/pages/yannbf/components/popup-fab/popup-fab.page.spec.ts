import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFabPage } from './popup-fab.page';

describe('PopupFabPage', () => {
  let component: PopupFabPage;
  let fixture: ComponentFixture<PopupFabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupFabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
