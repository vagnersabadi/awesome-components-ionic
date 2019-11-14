import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TimelinePage } from './timeline.page';
import { YannbfComponentsModule } from 'src/app/components/yannbf/yannbf.components.module';

const routes: Routes = [
  {
    path: '',
    component: TimelinePage
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
  declarations: [TimelinePage]
})
export class TimelinePageModule {}
