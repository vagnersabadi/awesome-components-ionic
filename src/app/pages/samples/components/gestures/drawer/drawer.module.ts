import { UiComponentsModule } from './../../../../../components/ui/ui.components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrawerPageRoutingModule } from './drawer-routing.module';

import { DrawerPage } from './drawer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrawerPageRoutingModule,
    UiComponentsModule
  ],
  declarations: [DrawerPage]
})
export class DrawerPageModule {}
