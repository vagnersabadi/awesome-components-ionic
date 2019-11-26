import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveDocumentPage } from './move-document.page';

describe('MoveDocumentPage', () => {
  let component: MoveDocumentPage;
  let fixture: ComponentFixture<MoveDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveDocumentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
