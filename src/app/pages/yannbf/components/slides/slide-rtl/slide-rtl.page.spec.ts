import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideRtlPage } from './slide-rtl.page';

describe('SlideRtlPage', () => {
  let component: SlideRtlPage;
  let fixture: ComponentFixture<SlideRtlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideRtlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideRtlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
