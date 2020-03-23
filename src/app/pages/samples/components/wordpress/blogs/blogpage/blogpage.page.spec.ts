import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogpagePage } from './blogpage.page';

describe('BlogpagePage', () => {
  let component: BlogpagePage;
  let fixture: ComponentFixture<BlogpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
