import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UiBrandPage } from './ui-brand.page';

describe('UiBrandPage', () => {
  let component: UiBrandPage;
  let fixture: ComponentFixture<UiBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UiBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
