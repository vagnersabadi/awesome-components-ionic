import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditableLabelPageRoutingModule } from './editable-label-routing.module';

import { EditableLabelPage } from './editable-label.page';
import { FivEditableLabelModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditableLabelPageRoutingModule,
    FivEditableLabelModule,
    ReactiveFormsModule,

  ],
  declarations: [EditableLabelPage]
})
export class EditableLabelPageModule {}
