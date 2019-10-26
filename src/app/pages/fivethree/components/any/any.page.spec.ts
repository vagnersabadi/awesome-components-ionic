import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyPage } from './any.page';

describe('AnyPage', () => {
  let component: AnyPage;
  let fixture: ComponentFixture<AnyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
