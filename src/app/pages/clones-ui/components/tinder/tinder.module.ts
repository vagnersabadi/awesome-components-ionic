import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinderPageRoutingModule } from './tinder-routing.module';

import { TinderPage } from './tinder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinderPageRoutingModule
  ],
  declarations: [TinderPage]
})
export class TinderPageModule {}
