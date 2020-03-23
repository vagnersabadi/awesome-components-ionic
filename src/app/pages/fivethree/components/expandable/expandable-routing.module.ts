import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpandablePage } from './expandable.page';

const routes: Routes = [
  {
    path: '',
    component: ExpandablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpandablePageRoutingModule {}
