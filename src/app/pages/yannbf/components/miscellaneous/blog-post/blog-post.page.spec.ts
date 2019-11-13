import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostPage } from './blog-post.page';

describe('BlogPostPage', () => {
  let component: BlogPostPage;
  let fixture: ComponentFixture<BlogPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
