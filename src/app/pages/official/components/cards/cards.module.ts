import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsPageRoutingModule } from './cards-routing.module';

import { CardsPage } from './cards.page';
import { CardSocialPageModule } from './card-social/card-social.module';
import { CardMapPageModule } from './card-map/card-map.module';
import { CardImagePageModule } from './card-image/card-image.module';
import { CardBackgroundPageModule } from './card-background/card-background.module';
import { CardBadgePageModule } from './card-badge/card-badge.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsPageRoutingModule,
    CardSocialPageModule,
    CardMapPageModule,
    CardImagePageModule,
    CardBadgePageModule,
    CardBackgroundPageModule

  ],
  declarations: [CardsPage]
})
export class CardsPageModule {}
