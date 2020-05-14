import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GesturesPage } from './gestures.page';

describe('GesturesPage', () => {
  let component: GesturesPage;
  let fixture: ComponentFixture<GesturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GesturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
