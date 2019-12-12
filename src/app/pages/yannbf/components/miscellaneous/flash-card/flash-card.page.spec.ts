import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardPage } from './flash-card.page';

describe('FlashCardPage', () => {
  let component: FlashCardPage;
  let fixture: ComponentFixture<FlashCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
