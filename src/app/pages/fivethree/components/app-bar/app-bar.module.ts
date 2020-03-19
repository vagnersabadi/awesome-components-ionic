import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppBarPageRoutingModule } from './app-bar-routing.module';

import { AppBarPage } from './app-bar.page';

import {
  FivAppBarModule,
  FivCenterModule,
  FivFabModule,
  FivIconModule,
  FivFeatureDiscoveryModule,
  FivIfModule
} from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppBarPageRoutingModule,
    FivAppBarModule,
    FivCenterModule,
    FivIfModule,
    FivFabModule,
    FivIconModule,
    FivFeatureDiscoveryModule
  ],
  declarations: [AppBarPage]
})
export class AppBarPageModule {}
