import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideWalkthroughPage } from './slide-walkthrough.page';

describe('SlideWalkthroughPage', () => {
  let component: SlideWalkthroughPage;
  let fixture: ComponentFixture<SlideWalkthroughPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideWalkthroughPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideWalkthroughPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
