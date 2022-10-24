import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicIslandPageRoutingModule } from './dynamic-island-routing.module';

import { DynamicIslandPage } from './dynamic-island.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicIslandPageRoutingModule
  ],
  declarations: [DynamicIslandPage]
})
export class DynamicIslandPageModule {}
