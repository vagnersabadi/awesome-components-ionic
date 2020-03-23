import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogPageRoutingModule } from './dialog-routing.module';

import { DialogPage } from './dialog.page';
import { FivDialogModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogPageRoutingModule,
    FivDialogModule
  ],
  declarations: [DialogPage]
})
export class DialogPageModule {}
