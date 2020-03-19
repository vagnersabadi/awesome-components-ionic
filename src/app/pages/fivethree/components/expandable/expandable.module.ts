import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpandablePageRoutingModule } from './expandable-routing.module';

import { ExpandablePage } from './expandable.page';
import { FivCenterModule, FivExpandableModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandablePageRoutingModule,
    FivExpandableModule,
    FivCenterModule
  ],
  declarations: [ExpandablePage]
})
export class ExpandablePageModule {}
