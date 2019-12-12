import { HintModalPageModule } from './hint-modal/hint-modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopupModalPage } from './popup-modal.page';
import { WalkthroughModalPageModule } from './walkthrough-modal/walkthrough-modal.module';
import { SignupModalPageModule } from './signup-modal/signup-modal.module';

const routes: Routes = [
  {
    path: '',
    component: PopupModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    WalkthroughModalPageModule,
    SignupModalPageModule,
    HintModalPageModule
  ],
  declarations: [PopupModalPage]
})
export class PopupModalPageModule {}
