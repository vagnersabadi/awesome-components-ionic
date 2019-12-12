import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpansionPage } from './expansion.page';
import { MatExpansionModule } from '@angular/material/expansion';

const routes: Routes = [
  {
    path: '',
    component: ExpansionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
  ],
  declarations: [ExpansionPage]
})
export class ExpansionPageModule { }
