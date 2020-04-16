import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TinderPage } from './tinder.page';

describe('TinderPage', () => {
  let component: TinderPage;
  let fixture: ComponentFixture<TinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
