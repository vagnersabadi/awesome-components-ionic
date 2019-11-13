import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownPage } from './countdown.page';

describe('CountdownPage', () => {
  let component: CountdownPage;
  let fixture: ComponentFixture<CountdownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
