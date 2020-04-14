import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Grid6Page } from './grid6.page';

describe('Grid6Page', () => {
  let component: Grid6Page;
  let fixture: ComponentFixture<Grid6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Grid6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
