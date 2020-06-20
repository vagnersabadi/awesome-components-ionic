import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KikstartUiPageRoutingModule } from './kikstart-ui-routing.module';

import { KikstartUiPage } from './kikstart-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KikstartUiPageRoutingModule,
  ],
  declarations: [KikstartUiPage]
})
export class KikstartUiPageModule {}
