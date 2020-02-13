import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBackgroundPage } from './card-background';

@NgModule({
  declarations: [
    CardBackgroundPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  entryComponents: [
    CardBackgroundPage
  ]
})

export class CardBackgroundPageModule { }
