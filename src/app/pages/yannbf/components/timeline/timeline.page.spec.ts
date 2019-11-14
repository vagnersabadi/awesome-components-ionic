import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePage } from './timeline.page';

describe('TimelinePage', () => {
  let component: TimelinePage;
  let fixture: ComponentFixture<TimelinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
