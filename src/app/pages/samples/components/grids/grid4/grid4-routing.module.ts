import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Grid4Page } from './grid4.page';

const routes: Routes = [
  {
    path: '',
    component: Grid4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Grid4PageRoutingModule {}
