import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepperPage } from './stepper.page';

describe('StepperPage', () => {
  let component: StepperPage;
  let fixture: ComponentFixture<StepperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
