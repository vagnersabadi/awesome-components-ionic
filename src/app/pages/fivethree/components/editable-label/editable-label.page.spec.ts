import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditableLabelPage } from './editable-label.page';

describe('EditableLabelPage', () => {
  let component: EditableLabelPage;
  let fixture: ComponentFixture<EditableLabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableLabelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditableLabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
