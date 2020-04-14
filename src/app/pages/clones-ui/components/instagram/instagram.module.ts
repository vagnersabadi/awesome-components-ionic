import { CloneComponentsModule } from './../../../../components/clones/clone.components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstagramPageRoutingModule } from './instagram-routing.module';

import { InstagramPage } from './instagram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstagramPageRoutingModule,
    CloneComponentsModule
  ],
  declarations: [InstagramPage]
})
export class InstagramPageModule {}
