import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabPage } from './fab.page';

describe('FabPage', () => {
  let component: FabPage;
  let fixture: ComponentFixture<FabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
