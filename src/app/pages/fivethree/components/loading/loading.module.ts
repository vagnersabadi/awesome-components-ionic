import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoadingPage } from './loading.page';
import { FivCenterModule, FivLoadingProgressBarModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: LoadingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivLoadingProgressBarModule,
    FivCenterModule
  ],
  declarations: [LoadingPage]
})
export class LoadingPageModule {}
