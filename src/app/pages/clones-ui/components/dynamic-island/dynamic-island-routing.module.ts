import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicIslandPage } from './dynamic-island.page';

const routes: Routes = [
  {
    path: '',
    component: DynamicIslandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicIslandPageRoutingModule {}
