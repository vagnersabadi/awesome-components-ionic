import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Grid4PageRoutingModule } from './grid4-routing.module';

import { Grid4Page } from './grid4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Grid4PageRoutingModule
  ],
  declarations: [Grid4Page]
})
export class Grid4PageModule {}
