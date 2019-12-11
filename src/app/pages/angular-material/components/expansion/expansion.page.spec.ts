import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPage } from './expansion.page';

describe('ExpansionPage', () => {
  let component: ExpansionPage;
  let fixture: ComponentFixture<ExpansionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
