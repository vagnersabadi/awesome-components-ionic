import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Grid4Page } from './grid4.page';

describe('Grid4Page', () => {
  let component: Grid4Page;
  let fixture: ComponentFixture<Grid4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Grid4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
