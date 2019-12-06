import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePhotoGalleryPage } from './slide-photo-gallery.page';

describe('SlidePhotoGalleryPage', () => {
  let component: SlidePhotoGalleryPage;
  let fixture: ComponentFixture<SlidePhotoGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePhotoGalleryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePhotoGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
