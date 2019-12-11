import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileThreePage } from './profile-three.page';

describe('ProfileThreePage', () => {
  let component: ProfileThreePage;
  let fixture: ComponentFixture<ProfileThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
