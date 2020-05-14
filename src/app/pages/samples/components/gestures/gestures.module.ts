import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GesturesPageRoutingModule } from './gestures-routing.module';

import { GesturesPage } from './gestures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GesturesPageRoutingModule
  ],
  declarations: [GesturesPage]
})
export class GesturesPageModule {}
