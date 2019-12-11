import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTablePage } from './mat-table.page';

describe('MatTablePage', () => {
  let component: MatTablePage;
  let fixture: ComponentFixture<MatTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
