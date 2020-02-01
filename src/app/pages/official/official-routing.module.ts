import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficialPage } from './official.page';

const routes: Routes = [
  {
    path: '',
    component: OfficialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficialPageRoutingModule {}
