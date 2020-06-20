import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiButtonPage } from './ui-button.page';

const routes: Routes = [
  {
    path: '',
    component: UiButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiButtonPageRoutingModule {}
