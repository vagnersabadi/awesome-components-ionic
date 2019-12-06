import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOnePage } from './profile-one.page';

describe('ProfileOnePage', () => {
  let component: ProfileOnePage;
  let fixture: ComponentFixture<ProfileOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
