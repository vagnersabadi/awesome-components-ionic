import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsPage } from './profile-settings.page';

describe('ProfileSettingsPage', () => {
  let component: ProfileSettingsPage;
  let fixture: ComponentFixture<ProfileSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
