import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Grid2Page } from './grid2.page';

describe('Grid2Page', () => {
  let component: Grid2Page;
  let fixture: ComponentFixture<Grid2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Grid2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
