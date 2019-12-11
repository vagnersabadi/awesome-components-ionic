import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MatStepperPage } from './mat-stepper.page';
import { MatStepperModule } from '@angular/material/stepper';

const routes: Routes = [
  {
    path: '',
    component: MatStepperPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatStepperModule
  ],
  declarations: [MatStepperPage]
})
export class MatStepperPageModule { }
