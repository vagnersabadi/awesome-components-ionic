import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryPageRoutingModule } from './gallery-routing.module';

import { GalleryPage } from './gallery.page';
import {
  FivGalleryModule,
  FivSpinnerModule,
  FivCenterModule
} from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryPageRoutingModule,
    FivGalleryModule,
    FivSpinnerModule,
    FivCenterModule
  ],
  declarations: [GalleryPage]
})
export class GalleryPageModule {}
