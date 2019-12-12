import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AngularMaterialPage } from './angular-material.page';

const routes: Routes = [
  {
    path: '',
    component: AngularMaterialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [AngularMaterialPage]
})
export class AngularMaterialPageModule {}
