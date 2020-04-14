import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UberPage } from './uber.page';

const routes: Routes = [
  {
    path: '',
    component: UberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UberPageRoutingModule {}
