import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinderCardsPage } from './tinder-cards.page';

describe('TinderCardsPage', () => {
  let component: TinderCardsPage;
  let fixture: ComponentFixture<TinderCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinderCardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinderCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
