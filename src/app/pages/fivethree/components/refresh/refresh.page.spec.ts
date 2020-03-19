import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefreshPage } from './refresh.page';

describe('RefreshPage', () => {
  let component: RefreshPage;
  let fixture: ComponentFixture<RefreshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefreshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
