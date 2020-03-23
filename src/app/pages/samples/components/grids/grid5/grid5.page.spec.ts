import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Grid5Page } from './grid5.page';

describe('Grid5Page', () => {
  let component: Grid5Page;
  let fixture: ComponentFixture<Grid5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Grid5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
