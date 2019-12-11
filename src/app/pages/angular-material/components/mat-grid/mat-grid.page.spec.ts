import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatGridPage } from './mat-grid.page';

describe('MatGridPage', () => {
  let component: MatGridPage;
  let fixture: ComponentFixture<MatGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
