import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupMenuTwoPage } from './popup-menu-two.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [PopupMenuTwoPage],
  entryComponents:[PopupMenuTwoPage]
})
export class PopupMenuTwoPageModule {}
