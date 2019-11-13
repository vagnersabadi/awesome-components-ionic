import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRibbonPage } from './item-ribbon.page';

describe('ItemRibbonPage', () => {
  let component: ItemRibbonPage;
  let fixture: ComponentFixture<ItemRibbonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRibbonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRibbonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
