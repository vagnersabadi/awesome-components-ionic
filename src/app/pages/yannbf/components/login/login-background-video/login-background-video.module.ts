import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginBackgroundVideoPage } from './login-background-video.page';

const routes: Routes = [
  {
    path: '',
    component: LoginBackgroundVideoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginBackgroundVideoPage]
})
export class LoginBackgroundVideoPageModule {}
