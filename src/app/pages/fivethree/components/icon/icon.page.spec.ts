import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IconPage } from './icon.page';

describe('IconPage', () => {
  let component: IconPage;
  let fixture: ComponentFixture<IconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
