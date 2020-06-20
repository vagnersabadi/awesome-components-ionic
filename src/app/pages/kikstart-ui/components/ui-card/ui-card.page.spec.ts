import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UiCardPage } from './ui-card.page';

describe('UiCardPage', () => {
  let component: UiCardPage;
  let fixture: ComponentFixture<UiCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UiCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
