import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewportPageRoutingModule } from './viewport-routing.module';

import { ViewportPage } from './viewport.page';
import { FivCenterModule, FivViewportModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewportPageRoutingModule,
    FivViewportModule,
    FivCenterModule
  ],
  declarations: [ViewportPage]
})
export class ViewportPageModule {}
