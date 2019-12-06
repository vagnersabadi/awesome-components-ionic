import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMenuOnePage } from './popup-menu-one.page';

describe('PopupMenuOnePage', () => {
  let component: PopupMenuOnePage;
  let fixture: ComponentFixture<PopupMenuOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMenuOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMenuOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
