import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YannbfPage } from './yannbf.page';

describe('YannbfPage', () => {
  let component: YannbfPage;
  let fixture: ComponentFixture<YannbfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YannbfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YannbfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
