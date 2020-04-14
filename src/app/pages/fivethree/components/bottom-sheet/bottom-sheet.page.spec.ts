import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottomSheetPage } from './bottom-sheet.page';

describe('BottomSheetPage', () => {
  let component: BottomSheetPage;
  let fixture: ComponentFixture<BottomSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottomSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
