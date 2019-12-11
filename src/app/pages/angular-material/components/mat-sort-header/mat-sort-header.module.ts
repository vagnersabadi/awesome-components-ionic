import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MatSortHeaderPage } from './mat-sort-header.page';
import {MatSortModule} from '@angular/material/sort';

const routes: Routes = [
  {
    path: '',
    component: MatSortHeaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatSortModule
  ],
  declarations: [MatSortHeaderPage]
})
export class MatSortHeaderPageModule {}
