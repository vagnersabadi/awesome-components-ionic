import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileSettingsPage } from './profile-settings.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ProfileSettingsPage],
  entryComponents: [ProfileSettingsPage],

})
export class ProfileSettingsPageModule { }
