import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RefreshPage } from './refresh.page';
import { FivLoadingContentModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: RefreshPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivLoadingContentModule

  ],
  declarations: [RefreshPage]
})
export class RefreshPageModule {}
