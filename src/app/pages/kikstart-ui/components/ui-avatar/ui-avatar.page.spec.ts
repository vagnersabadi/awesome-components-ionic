import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UiAvatarPage } from './ui-avatar.page';

describe('UiAvatarPage', () => {
  let component: UiAvatarPage;
  let fixture: ComponentFixture<UiAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiAvatarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UiAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
