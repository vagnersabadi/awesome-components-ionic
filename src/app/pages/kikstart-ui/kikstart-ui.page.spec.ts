import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KikstartUiPage } from './kikstart-ui.page';

describe('KikstartUiPage', () => {
  let component: KikstartUiPage;
  let fixture: ComponentFixture<KikstartUiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KikstartUiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KikstartUiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
