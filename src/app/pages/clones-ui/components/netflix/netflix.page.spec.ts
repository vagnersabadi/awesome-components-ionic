import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetflixPage } from './netflix.page';

describe('NetflixPage', () => {
  let component: NetflixPage;
  let fixture: ComponentFixture<NetflixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetflixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetflixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
