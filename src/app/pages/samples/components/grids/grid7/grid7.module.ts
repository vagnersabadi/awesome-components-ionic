import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Grid7PageRoutingModule } from './grid7-routing.module';

import { Grid7Page } from './grid7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Grid7PageRoutingModule
  ],
  declarations: [Grid7Page]
})
export class Grid7PageModule {}
