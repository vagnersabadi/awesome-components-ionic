import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrawerPage } from './drawer.page';

describe('DrawerPage', () => {
  let component: DrawerPage;
  let fixture: ComponentFixture<DrawerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
