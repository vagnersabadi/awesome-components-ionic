import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupFabModalPage } from './popup-fab-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [PopupFabModalPage],
  entryComponents: [PopupFabModalPage]

})
export class PopupFabModalPageModule {}
