import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditableLabelPage } from './editable-label.page';
import { FivEditableLabelModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: EditableLabelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FivEditableLabelModule
  ],
  declarations: [EditableLabelPage]
})
export class EditableLabelPageModule {}
