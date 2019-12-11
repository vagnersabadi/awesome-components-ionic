import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlideFreeModePage } from './slide-free-mode.page';

const routes: Routes = [
  {
    path: '',
    component: SlideFreeModePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlideFreeModePage]
})
export class SlideFreeModePageModule {}
