import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopupFabPage } from './popup-fab.page';
import { PopupFabModalPageModule } from './popup-fab-modal/popup-fab-modal.module';

const routes: Routes = [
  {
    path: '',
    component: PopupFabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PopupFabModalPageModule
  ],
  declarations: [PopupFabPage]
})
export class PopupFabPageModule {}
