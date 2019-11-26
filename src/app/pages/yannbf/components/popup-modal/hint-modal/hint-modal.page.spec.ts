import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintModalPage } from './hint-modal.page';

describe('HintModalPage', () => {
  let component: HintModalPage;
  let fixture: ComponentFixture<HintModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
