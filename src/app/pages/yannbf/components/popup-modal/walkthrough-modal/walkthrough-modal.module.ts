import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkthroughModalPage } from './walkthrough-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [WalkthroughModalPage],
  entryComponents: [WalkthroughModalPage]

})
export class WalkthroughModalPageModule {}
