import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchbarPage } from './searchbar.page';
import { FivSearchbarModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: SearchbarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivSearchbarModule
  ],
  declarations: [SearchbarPage]
})
export class SearchbarPageModule {}
