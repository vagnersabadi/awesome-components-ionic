import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemingPage } from './theming.page';

describe('ThemingPage', () => {
  let component: ThemingPage;
  let fixture: ComponentFixture<ThemingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
