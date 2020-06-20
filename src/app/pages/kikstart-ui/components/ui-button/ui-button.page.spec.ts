import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UiButtonPage } from './ui-button.page';

describe('UiButtonPage', () => {
  let component: UiButtonPage;
  let fixture: ComponentFixture<UiButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UiButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
