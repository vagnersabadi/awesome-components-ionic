import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MatCardPage } from './mat-card.page';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: MatCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  declarations: [MatCardPage]
})
export class MatCardPageModule {}
