import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogPage } from './dialog.page';

describe('DialogPage', () => {
  let component: DialogPage;
  let fixture: ComponentFixture<DialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
