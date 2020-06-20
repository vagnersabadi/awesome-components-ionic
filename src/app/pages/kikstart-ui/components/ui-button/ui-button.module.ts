import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiButtonPageRoutingModule } from './ui-button-routing.module';

import { UiButtonPage } from './ui-button.page';
import { UiModule } from '@kikstart/ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiButtonPageRoutingModule,
    UiModule
  ],
  declarations: [UiButtonPage]
})
export class UiButtonPageModule {}
