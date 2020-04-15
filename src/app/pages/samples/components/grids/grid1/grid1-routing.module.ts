import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Grid1Page } from './grid1.page';

const routes: Routes = [
  {
    path: '',
    component: Grid1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Grid1PageRoutingModule {}
