import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpandableHeaderPage } from './expandable-header.page';

const routes: Routes = [
  {
    path: '',
    component: ExpandableHeaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExpandableHeaderPage]
})
export class ExpandableHeaderPageModule {}
