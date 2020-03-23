import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Grid3Page } from './grid3.page';

describe('Grid3Page', () => {
  let component: Grid3Page;
  let fixture: ComponentFixture<Grid3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Grid3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
