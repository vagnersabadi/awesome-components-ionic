import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatsappPage } from './whatsapp.page';

describe('WhatsappPage', () => {
  let component: WhatsappPage;
  let fixture: ComponentFixture<WhatsappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
