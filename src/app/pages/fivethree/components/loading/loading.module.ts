import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingPageRoutingModule } from './loading-routing.module';

import { LoadingPage } from './loading.page';
import {
  FivLoadingProgressBarModule,
  FivSpinnerModule,
  FivCenterModule
} from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingPageRoutingModule,
    FivLoadingProgressBarModule,
    FivSpinnerModule,
    FivCenterModule
  ],
  declarations: [LoadingPage]
})
export class LoadingPageModule {}
