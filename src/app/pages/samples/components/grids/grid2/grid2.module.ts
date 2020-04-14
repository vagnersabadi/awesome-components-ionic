import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Grid2PageRoutingModule } from './grid2-routing.module';

import { Grid2Page } from './grid2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Grid2PageRoutingModule
  ],
  declarations: [Grid2Page]
})
export class Grid2PageModule {}
