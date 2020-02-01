import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveListLabelPageRoutingModule } from './reactive-list-label-routing.module';

import { ReactiveListLabelPage } from './reactive-list-label.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveListLabelPageRoutingModule
  ],
  declarations: [ReactiveListLabelPage]
})
export class ReactiveListLabelPageModule {}
