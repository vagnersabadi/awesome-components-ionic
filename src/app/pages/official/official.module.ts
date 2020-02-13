import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficialPageRoutingModule } from './official-routing.module';

import { OfficialPage } from './official.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficialPageRoutingModule
  ],
  declarations: [OfficialPage]
})
export class OfficialPageModule {}
