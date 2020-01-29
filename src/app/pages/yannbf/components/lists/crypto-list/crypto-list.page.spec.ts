import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CryptoListPage } from './crypto-list.page';

describe('CryptoListPage', () => {
  let component: CryptoListPage;
  let fixture: ComponentFixture<CryptoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
