import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTransitionsPage } from './slide-transitions.page';

describe('SlideTransitionsPage', () => {
  let component: SlideTransitionsPage;
  let fixture: ComponentFixture<SlideTransitionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideTransitionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTransitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
