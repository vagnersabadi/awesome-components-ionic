import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlideCarouselPage } from './slide-carousel.page';

const routes: Routes = [
  {
    path: '',
    component: SlideCarouselPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlideCarouselPage]
})
export class SlideCarouselPageModule {}
