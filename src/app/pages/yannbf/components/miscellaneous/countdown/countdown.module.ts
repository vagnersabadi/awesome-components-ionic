import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CountdownPage } from './countdown.page';
import { YannbfComponentsModule } from 'src/app/components/yannbf/yannbf.components.module';

const routes: Routes = [
  {
    path: '',
    component: CountdownPage
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
  declarations: [CountdownPage]
})
export class CountdownPageModule {}
