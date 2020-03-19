import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabPage } from './fab.page';

const routes: Routes = [
  {
    path: '',
    component: FabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabPageRoutingModule {}
