import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlideColorChangingPage } from './slide-color-changing.page';

const routes: Routes = [
  {
    path: '',
    component: SlideColorChangingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlideColorChangingPage]
})
export class SlideColorChangingPageModule {}
