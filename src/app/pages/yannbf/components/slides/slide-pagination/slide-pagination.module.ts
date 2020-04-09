import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidePaginationPageRoutingModule } from './slide-pagination-routing.module';

import { SlidePaginationPage } from './slide-pagination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidePaginationPageRoutingModule
  ],
  declarations: [SlidePaginationPage]
})
export class SlidePaginationPageModule {}
