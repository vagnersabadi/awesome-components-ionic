import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopupMenuPage } from './popup-menu.page';
import { PopupMenuTwoPageModule } from './popup-menu-two/popup-menu-two.module';
import { PopupMenuOnePageModule } from './popup-menu-one/popup-menu-one.module';

const routes: Routes = [
  {
    path: '',
    component: PopupMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PopupMenuOnePageModule,
    PopupMenuTwoPageModule
  ],
  declarations: [PopupMenuPage]
})
export class PopupMenuPageModule {}
