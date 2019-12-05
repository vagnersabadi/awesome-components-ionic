import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFreeModePage } from './slide-free-mode.page';

describe('SlideFreeModePage', () => {
  let component: SlideFreeModePage;
  let fixture: ComponentFixture<SlideFreeModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideFreeModePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFreeModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
