import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCarouselPage } from './slide-carousel.page';

describe('SlideCarouselPage', () => {
  let component: SlideCarouselPage;
  let fixture: ComponentFixture<SlideCarouselPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCarouselPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCarouselPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
