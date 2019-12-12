import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardPage } from './mat-card.page';

describe('MatCardPage', () => {
  let component: MatCardPage;
  let fixture: ComponentFixture<MatCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
