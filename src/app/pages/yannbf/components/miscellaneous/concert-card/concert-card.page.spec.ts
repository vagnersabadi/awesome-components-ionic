import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertCardPage } from './concert-card.page';

describe('ConcertCardPage', () => {
  let component: ConcertCardPage;
  let fixture: ComponentFixture<ConcertCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
