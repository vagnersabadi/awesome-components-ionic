import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDragDropPage } from './mat-drag-drop.page';

describe('MatDragDropPage', () => {
  let component: MatDragDropPage;
  let fixture: ComponentFixture<MatDragDropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDragDropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDragDropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
