import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeatureDiscoveryPage } from './feature-discovery.page';
import { FivFeatureDiscoveryModule, FivIconModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: FeatureDiscoveryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivFeatureDiscoveryModule,
    FivIconModule
  ],
  declarations: [FeatureDiscoveryPage]
})
export class FeatureDiscoveryPageModule {}
