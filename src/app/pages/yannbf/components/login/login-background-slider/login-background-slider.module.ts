import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginBackgroundSliderPage } from './login-background-slider.page';

const routes: Routes = [
  {
    path: '',
    component: LoginBackgroundSliderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [LoginBackgroundSliderPage]
})
export class LoginBackgroundSliderPageModule {}
