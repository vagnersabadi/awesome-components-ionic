import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppBarPage } from './app-bar.page';

describe('AppBarPage', () => {
  let component: AppBarPage;
  let fixture: ComponentFixture<AppBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
