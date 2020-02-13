import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfficialPage } from './official.page';

describe('OfficialPage', () => {
  let component: OfficialPage;
  let fixture: ComponentFixture<OfficialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfficialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
