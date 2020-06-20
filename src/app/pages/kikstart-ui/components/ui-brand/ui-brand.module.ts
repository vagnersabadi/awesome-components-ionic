import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiBrandPageRoutingModule } from './ui-brand-routing.module';

import { UiBrandPage } from './ui-brand.page';
import { UiModule } from '@kikstart/ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiBrandPageRoutingModule,
    UiModule

  ],
  declarations: [UiBrandPage]
})
export class UiBrandPageModule {}
