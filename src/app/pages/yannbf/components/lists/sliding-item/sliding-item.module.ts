import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidingItemPage } from './sliding-item.page';

const routes: Routes = [
  {
    path: '',
    component: SlidingItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlidingItemPage]
})
export class SlidingItemPageModule {}
