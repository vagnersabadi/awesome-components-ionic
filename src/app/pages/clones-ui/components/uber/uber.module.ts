import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UberPageRoutingModule } from './uber-routing.module';

import { UberPage } from './uber.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UberPageRoutingModule
  ],
  declarations: [UberPage]
})
export class UberPageModule { }
