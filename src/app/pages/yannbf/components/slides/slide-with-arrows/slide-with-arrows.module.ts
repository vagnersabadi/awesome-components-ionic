import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlideWithArrowsPage } from './slide-with-arrows.page';

const routes: Routes = [
  {
    path: '',
    component: SlideWithArrowsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlideWithArrowsPage]
})
export class SlideWithArrowsPageModule {}
