import { CardBadgePage } from './card-badge';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CardBadgePage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  entryComponents: [
    CardBadgePage
  ]
})

export class CardBadgePageModule { }
