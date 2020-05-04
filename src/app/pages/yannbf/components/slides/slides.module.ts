import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesPage } from './slides.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesPage
  },

  {
    path: 'slide-color-changing', loadChildren: () => import('./slide-color-changing/slide-color-changing.module').then(m => m.SlideColorChangingPageModule)
  },
  {
    path: 'slide-color-changing', loadChildren: () => import('./slide-color-changing/slide-color-changing.module').then(m => m.SlideColorChangingPageModule)
  },
  {
    path: 'slide-custom-pagination', loadChildren: () => import('./slide-custom-pagination/slide-custom-pagination.module').then(m => m.SlideCustomPaginationPageModule)
  },
  {
    path: 'slide-nested', loadChildren: () => import('./slide-nested/slide-nested.module').then(m => m.SlideNestedPageModule)
  },
  {
    path: 'slide-free-mode', loadChildren: () => import('./slide-free-mode/slide-free-mode.module').then(m => m.SlideFreeModePageModule)
  },
  {
    path: 'slide-photo-gallery', loadChildren: () => import('./slide-photo-gallery/slide-photo-gallery.module').then(m => m.SlidePhotoGalleryPageModule)
  },
  {
    path: 'slide-rtl', loadChildren: () => import('./slide-rtl/slide-rtl.module').then(m => m.SlideRtlPageModule)
  },
  {
    path: 'slide-transitions', loadChildren: () => import('./slide-transitions/slide-transitions.module').then(m => m.SlideTransitionsPageModule)
  },
  {
    path: 'slide-walkthrough', loadChildren: () => import('./slide-walkthrough/slide-walkthrough.module').then(m => m.SlideWalkthroughPageModule)
  },
  {
    path: 'slide-list', loadChildren: () => import('./slide-list/slide-list.module').then(m => m.SlideListPageModule)
  },
  {
    path: 'slide-with-arrows', loadChildren: () => import('./slide-with-arrows/slide-with-arrows.module').then(m => m.SlideWithArrowsPageModule)
  },
  {
    path: 'slide-carousel', loadChildren: () => import('./slide-carousel/slide-carousel.module').then(m => m.SlideCarouselPageModule)
  },
  {
    path: 'slide-pagination', loadChildren: () => import('./slide-pagination/slide-pagination.module').then(m => m.SlidePaginationPageModule)
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlidesPage]
})
export class SlidesPageModule { }
