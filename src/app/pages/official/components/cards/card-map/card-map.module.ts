import { CardMapPage } from './card-map';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CardMapPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  entryComponents: [
    CardMapPage
  ]
})

export class CardMapPageModule { }
