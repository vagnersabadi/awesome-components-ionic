import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutosizingTextAreaPage } from './autosizing-text-area.page';

const routes: Routes = [
  {
    path: '',
    component: AutosizingTextAreaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AutosizingTextAreaPage]
})
export class AutosizingTextAreaPageModule {}
