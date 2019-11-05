import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiscellaneousPage } from './miscellaneous.page';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiscellaneousPage]
})
export class MiscellaneousPageModule {}
