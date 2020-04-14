import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplesPageRoutingModule } from './samples-routing.module';

import { SamplesPage } from './samples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplesPageRoutingModule
  ],
  declarations: [SamplesPage]
})
export class SamplesPageModule {}
