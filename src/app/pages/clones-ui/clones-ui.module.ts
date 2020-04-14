import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClonesUiPageRoutingModule } from './clones-ui-routing.module';

import { ClonesUiPage } from './clones-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClonesUiPageRoutingModule
  ],
  declarations: [ClonesUiPage]
})
export class ClonesUiPageModule {}
