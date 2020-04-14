import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Grid6PageRoutingModule } from './grid6-routing.module';

import { Grid6Page } from './grid6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Grid6PageRoutingModule
  ],
  declarations: [Grid6Page]
})
export class Grid6PageModule {}
