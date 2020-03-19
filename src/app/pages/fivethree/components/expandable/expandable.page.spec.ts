import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpandablePage } from './expandable.page';

describe('ExpandablePage', () => {
  let component: ExpandablePage;
  let fixture: ComponentFixture<ExpandablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpandablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
