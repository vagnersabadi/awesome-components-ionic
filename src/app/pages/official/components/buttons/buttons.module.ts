import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsPageRoutingModule } from './buttons-routing.module';

import { ButtonsPage } from './buttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsPageRoutingModule
  ],
  declarations: [ButtonsPage]
})
export class ButtonsPageModule {}
