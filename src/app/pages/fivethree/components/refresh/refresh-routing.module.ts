import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreshPage } from './refresh.page';

const routes: Routes = [
  {
    path: '',
    component: RefreshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreshPageRoutingModule {}
