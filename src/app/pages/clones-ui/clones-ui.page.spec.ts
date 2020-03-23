import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClonesUiPage } from './clones-ui.page';

describe('ClonesUiPage', () => {
  let component: ClonesUiPage;
  let fixture: ComponentFixture<ClonesUiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClonesUiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClonesUiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
