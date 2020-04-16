import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinderPage } from './tinder.page';

const routes: Routes = [
  {
    path: '',
    component: TinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinderPageRoutingModule {}
