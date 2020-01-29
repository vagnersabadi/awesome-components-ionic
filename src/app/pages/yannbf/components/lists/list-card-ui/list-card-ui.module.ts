import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCardUiPageRoutingModule } from './list-card-ui-routing.module';

import { ListCardUiPage } from './list-card-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCardUiPageRoutingModule
  ],
  declarations: [ListCardUiPage]
})
export class ListCardUiPageModule {}
