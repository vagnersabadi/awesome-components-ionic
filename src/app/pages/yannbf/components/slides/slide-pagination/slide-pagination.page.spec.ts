import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidePaginationPage } from './slide-pagination.page';

describe('SlidePaginationPage', () => {
  let component: SlidePaginationPage;
  let fixture: ComponentFixture<SlidePaginationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePaginationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidePaginationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
