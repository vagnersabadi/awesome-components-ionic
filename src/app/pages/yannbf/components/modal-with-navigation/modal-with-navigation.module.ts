import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalWithNavigationPage } from './modal-with-navigation.page';
import { MoveDocumentPageModule } from './move-document/move-document.module';
import { ModalNavPageModule } from './modal-nav/modal-nav.module';

const routes: Routes = [
  {
    path: '',
    component: ModalWithNavigationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalNavPageModule,
    MoveDocumentPageModule
  ],
  declarations: [ModalWithNavigationPage]
})
export class ModalWithNavigationPageModule {}
