import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SamplesPage } from './samples.page';

describe('SamplesPage', () => {
  let component: SamplesPage;
  let fixture: ComponentFixture<SamplesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SamplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
