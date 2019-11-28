import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupMenuOnePage } from './popup-menu-one.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [PopupMenuOnePage],
  entryComponents: [PopupMenuOnePage]
})
export class PopupMenuOnePageModule {}
