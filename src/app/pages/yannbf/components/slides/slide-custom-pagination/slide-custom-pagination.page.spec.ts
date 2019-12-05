import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCustomPaginationPage } from './slide-custom-pagination.page';

describe('SlideCustomPaginationPage', () => {
  let component: SlideCustomPaginationPage;
  let fixture: ComponentFixture<SlideCustomPaginationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCustomPaginationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCustomPaginationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
