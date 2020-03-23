import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconPageRoutingModule } from './icon-routing.module';

import { IconPage } from './icon.page';
import { FivCenterModule, FivIconModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconPageRoutingModule,
    FivIconModule,
    FivCenterModule
  ],
  declarations: [IconPage]
})
export class IconPageModule {}
