import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalWithNavigationPage } from './modal-with-navigation.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [ModalWithNavigationPage]
})
export class ModalWithNavigationPageModule {}
