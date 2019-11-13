import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestMasonryCardsPage } from './pinterest-masonry-cards.page';

describe('PinterestMasonryCardsPage', () => {
  let component: PinterestMasonryCardsPage;
  let fixture: ComponentFixture<PinterestMasonryCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestMasonryCardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestMasonryCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
