import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateListingPage } from './real-estate-listing.page';

describe('RealEstateListingPage', () => {
  let component: RealEstateListingPage;
  let fixture: ComponentFixture<RealEstateListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
