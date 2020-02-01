import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardsPage } from './cards.page';

describe('CardsPage', () => {
  let component: CardsPage;
  let fixture: ComponentFixture<CardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
