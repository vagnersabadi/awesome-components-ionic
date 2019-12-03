import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFourPage } from './profile-four.page';

describe('ProfileFourPage', () => {
  let component: ProfileFourPage;
  let fixture: ComponentFixture<ProfileFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
