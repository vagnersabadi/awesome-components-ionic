import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewportPage } from './viewport.page';

describe('ViewportPage', () => {
  let component: ViewportPage;
  let fixture: ComponentFixture<ViewportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
