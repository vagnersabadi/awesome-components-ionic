import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiCardPage } from './ui-card.page';

const routes: Routes = [
  {
    path: '',
    component: UiCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiCardPageRoutingModule {}
