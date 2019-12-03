import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFivePage } from './profile-five.page';

describe('ProfileFivePage', () => {
  let component: ProfileFivePage;
  let fixture: ComponentFixture<ProfileFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
