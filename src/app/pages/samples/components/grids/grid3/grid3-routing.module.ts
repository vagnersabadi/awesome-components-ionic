import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Grid3Page } from './grid3.page';

const routes: Routes = [
  {
    path: '',
    component: Grid3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Grid3PageRoutingModule {}
