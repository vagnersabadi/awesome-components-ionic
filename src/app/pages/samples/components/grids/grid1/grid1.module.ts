import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Grid1PageRoutingModule } from './grid1-routing.module';

import { Grid1Page } from './grid1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Grid1PageRoutingModule
  ],
  declarations: [Grid1Page]
})
export class Grid1PageModule {}
