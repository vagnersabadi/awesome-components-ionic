import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginBackgroundVideosPage } from './login-background-videos.page';

const routes: Routes = [
  {
    path: '',
    component: LoginBackgroundVideosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginBackgroundVideosPage]
})
export class LoginBackgroundVideosPageModule {}
