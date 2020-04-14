import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UberPage } from './uber.page';

describe('UberPage', () => {
  let component: UberPage;
  let fixture: ComponentFixture<UberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
