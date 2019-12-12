import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMenuPage } from './popup-menu.page';

describe('PopupMenuPage', () => {
  let component: PopupMenuPage;
  let fixture: ComponentFixture<PopupMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
