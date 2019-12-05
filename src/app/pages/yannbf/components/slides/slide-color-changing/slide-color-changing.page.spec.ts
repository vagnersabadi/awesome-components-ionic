import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideColorChangingPage } from './slide-color-changing.page';

describe('SlideColorChangingPage', () => {
  let component: SlideColorChangingPage;
  let fixture: ComponentFixture<SlideColorChangingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideColorChangingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideColorChangingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
