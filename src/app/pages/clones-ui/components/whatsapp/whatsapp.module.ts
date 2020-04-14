import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsappPageRoutingModule } from './whatsapp-routing.module';

import { WhatsappPage } from './whatsapp.page';
import { ClassicPageModule } from './classic/classic.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsappPageRoutingModule,
    ClassicPageModule
  ],
  declarations: [WhatsappPage]
})
export class WhatsappPageModule {}
