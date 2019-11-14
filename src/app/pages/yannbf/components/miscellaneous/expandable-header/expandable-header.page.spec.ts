import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableHeaderPage } from './expandable-header.page';

describe('ExpandableHeaderPage', () => {
  let component: ExpandableHeaderPage;
  let fixture: ComponentFixture<ExpandableHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
