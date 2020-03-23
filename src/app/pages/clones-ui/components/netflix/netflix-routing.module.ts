import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetflixPage } from './netflix.page';

const routes: Routes = [
  {
    path: '',
    component: NetflixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetflixPageRoutingModule {}
