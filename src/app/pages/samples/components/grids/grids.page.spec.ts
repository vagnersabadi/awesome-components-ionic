import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridsPage } from './grids.page';

describe('GridsPage', () => {
  let component: GridsPage;
  let fixture: ComponentFixture<GridsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
