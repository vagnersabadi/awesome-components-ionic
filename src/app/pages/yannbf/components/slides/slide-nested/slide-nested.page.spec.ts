import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNestedPage } from './slide-nested.page';

describe('SlideNestedPage', () => {
  let component: SlideNestedPage;
  let fixture: ComponentFixture<SlideNestedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideNestedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideNestedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
