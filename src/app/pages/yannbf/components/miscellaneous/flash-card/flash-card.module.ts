import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlashCardPage } from './flash-card.page';
import { YannbfComponentsModule } from 'src/app/components/yannbf/yannbf.components.module';

const routes: Routes = [
  {
    path: '',
    component: FlashCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    YannbfComponentsModule
  ],
  declarations: [FlashCardPage]
})
export class FlashCardPageModule {}
