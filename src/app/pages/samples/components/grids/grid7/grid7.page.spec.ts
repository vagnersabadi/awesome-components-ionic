import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Grid7Page } from './grid7.page';

describe('Grid7Page', () => {
  let component: Grid7Page;
  let fixture: ComponentFixture<Grid7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Grid7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
