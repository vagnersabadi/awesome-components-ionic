import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideListPage } from './slide-list.page';

describe('SlideListPage', () => {
  let component: SlideListPage;
  let fixture: ComponentFixture<SlideListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
