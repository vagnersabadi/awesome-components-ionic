import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnyPage } from './any.page';
import {
  FivSearchbarModule,
  FivDialogModule,
  FivFabModule,
  FivIconModule,
  FivCenterModule,
  FivLoadingProgressBarModule,
  FivLoadingSpinnerModule,
  
} from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: AnyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivSearchbarModule,
    FivDialogModule,
    FivFabModule,
    FivIconModule,
    FivCenterModule,
    FivLoadingProgressBarModule,
    FivLoadingSpinnerModule,
  ],
  declarations: [AnyPage]
})
export class AnyPageModule { }
