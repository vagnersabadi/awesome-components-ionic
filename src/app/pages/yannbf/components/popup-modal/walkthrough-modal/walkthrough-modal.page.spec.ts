import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkthroughModalPage } from './walkthrough-modal.page';

describe('WalkthroughModalPage', () => {
  let component: WalkthroughModalPage;
  let fixture: ComponentFixture<WalkthroughModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkthroughModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkthroughModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
