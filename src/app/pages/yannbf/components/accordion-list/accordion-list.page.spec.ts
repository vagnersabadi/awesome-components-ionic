import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionListPage } from './accordion-list.page';

describe('AccordionListPage', () => {
  let component: AccordionListPage;
  let fixture: ComponentFixture<AccordionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
