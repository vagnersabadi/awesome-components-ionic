import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertsPage } from './alerts.page';

describe('AlertsPage', () => {
  let component: AlertsPage;
  let fixture: ComponentFixture<AlertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
