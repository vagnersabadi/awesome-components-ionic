import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Grid1Page } from './grid1.page';

describe('Grid1Page', () => {
  let component: Grid1Page;
  let fixture: ComponentFixture<Grid1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Grid1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
