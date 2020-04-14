import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Grid5PageRoutingModule } from './grid5-routing.module';

import { Grid5Page } from './grid5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Grid5PageRoutingModule
  ],
  declarations: [Grid5Page]
})
export class Grid5PageModule {}
