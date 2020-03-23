import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeatureDiscoveryPage } from './feature-discovery.page';

describe('FeatureDiscoveryPage', () => {
  let component: FeatureDiscoveryPage;
  let fixture: ComponentFixture<FeatureDiscoveryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureDiscoveryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDiscoveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
