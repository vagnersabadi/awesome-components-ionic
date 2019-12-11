import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSortHeaderPage } from './mat-sort-header.page';

describe('MatSortHeaderPage', () => {
  let component: MatSortHeaderPage;
  let fixture: ComponentFixture<MatSortHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSortHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSortHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
