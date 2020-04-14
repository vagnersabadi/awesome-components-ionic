import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetflixPageRoutingModule } from './netflix-routing.module';

import { NetflixPage } from './netflix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetflixPageRoutingModule
  ],
  declarations: [NetflixPage]
})
export class NetflixPageModule {}
