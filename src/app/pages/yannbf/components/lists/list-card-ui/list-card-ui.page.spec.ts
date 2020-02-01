import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCardUiPage } from './list-card-ui.page';

describe('ListCardUiPage', () => {
  let component: ListCardUiPage;
  let fixture: ComponentFixture<ListCardUiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardUiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCardUiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
