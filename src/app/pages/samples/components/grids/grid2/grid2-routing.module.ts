import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Grid2Page } from './grid2.page';

const routes: Routes = [
  {
    path: '',
    component: Grid2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Grid2PageRoutingModule {}
