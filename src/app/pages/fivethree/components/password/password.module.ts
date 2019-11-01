import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PasswordPage } from './password.page';
import { FivPasswordInputModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: PasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivPasswordInputModule,
    ReactiveFormsModule,
  ],
  declarations: [PasswordPage]
})
export class PasswordPageModule {}
