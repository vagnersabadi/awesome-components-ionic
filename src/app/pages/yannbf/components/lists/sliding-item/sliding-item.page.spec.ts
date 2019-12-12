import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingItemPage } from './sliding-item.page';

describe('SlidingItemPage', () => {
  let component: SlidingItemPage;
  let fixture: ComponentFixture<SlidingItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
