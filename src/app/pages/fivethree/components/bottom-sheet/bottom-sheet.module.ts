import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BottomSheetPage } from './bottom-sheet.page';
import { FivBottomSheetModule, FivIfModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: BottomSheetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivBottomSheetModule,
    FivIfModule
  ],
  declarations: [BottomSheetPage]
})
export class BottomSheetPageModule {}
