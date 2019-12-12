import { ProfileTwoPageModule } from './profile-two/profile-two.module';
import { ProfileThreePageModule } from './profile-three/profile-three.module';
import { ProfileSettingsPageModule } from './profile-settings/profile-settings.module';
import { ProfileFourPageModule } from './profile-four/profile-four.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { ProfileOnePageModule } from './profile-one/profile-one.module';
import { ProfileFivePageModule } from './profile-five/profile-five.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProfileOnePageModule,
    ProfileFivePageModule,
    ProfileFourPageModule,
    ProfileSettingsPageModule,
    ProfileThreePageModule,
    ProfileTwoPageModule



  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
