import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Grid3PageRoutingModule } from './grid3-routing.module';

import { Grid3Page } from './grid3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Grid3PageRoutingModule
  ],
  declarations: [Grid3Page]
})
export class Grid3PageModule {}
