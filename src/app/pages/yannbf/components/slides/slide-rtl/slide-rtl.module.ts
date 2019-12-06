import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlideRtlPage } from './slide-rtl.page';

const routes: Routes = [
  {
    path: '',
    component: SlideRtlPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlideRtlPage]
})
export class SlideRtlPageModule {}
