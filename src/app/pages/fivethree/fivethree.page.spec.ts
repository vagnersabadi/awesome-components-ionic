import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivethreePage } from './fivethree.page';

describe('FivethreePage', () => {
  let component: FivethreePage;
  let fixture: ComponentFixture<FivethreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivethreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivethreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
