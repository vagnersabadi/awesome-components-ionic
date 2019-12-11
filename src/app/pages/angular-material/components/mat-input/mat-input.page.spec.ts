import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputPage } from './mat-input.page';

describe('MatInputPage', () => {
  let component: MatInputPage;
  let fixture: ComponentFixture<MatInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
