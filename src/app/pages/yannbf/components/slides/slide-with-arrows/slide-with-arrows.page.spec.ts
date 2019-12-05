import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideWithArrowsPage } from './slide-with-arrows.page';

describe('SlideWithArrowsPage', () => {
  let component: SlideWithArrowsPage;
  let fixture: ComponentFixture<SlideWithArrowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideWithArrowsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideWithArrowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
