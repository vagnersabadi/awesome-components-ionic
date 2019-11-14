import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuPage } from './side-menu.page';

describe('SideMenuPage', () => {
  let component: SideMenuPage;
  let fixture: ComponentFixture<SideMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
