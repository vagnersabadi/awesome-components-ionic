import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeatureDiscoveryPageRoutingModule } from './feature-discovery-routing.module';

import { FeatureDiscoveryPage } from './feature-discovery.page';
import { FivIconModule, FivFeatureDiscoveryModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeatureDiscoveryPageRoutingModule,
    FivFeatureDiscoveryModule,
    FivIconModule
  ],
  declarations: [FeatureDiscoveryPage]
})
export class FeatureDiscoveryPageModule {}
