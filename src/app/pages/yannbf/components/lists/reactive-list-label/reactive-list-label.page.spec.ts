import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReactiveListLabelPage } from './reactive-list-label.page';

describe('ReactiveListLabelPage', () => {
  let component: ReactiveListLabelPage;
  let fixture: ComponentFixture<ReactiveListLabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveListLabelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveListLabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
