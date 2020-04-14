import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstagramPage } from './instagram.page';

describe('InstagramPage', () => {
  let component: InstagramPage;
  let fixture: ComponentFixture<InstagramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstagramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
