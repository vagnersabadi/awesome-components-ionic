import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiAvatarPageRoutingModule } from './ui-avatar-routing.module';

import { UiAvatarPage } from './ui-avatar.page';
import { UiModule } from '@kikstart/ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiAvatarPageRoutingModule,
    UiModule
  ],
  declarations: [UiAvatarPage]
})
export class UiAvatarPageModule {}
