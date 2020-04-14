import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Grid6Page } from './grid6.page';

const routes: Routes = [
  {
    path: '',
    component: Grid6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Grid6PageRoutingModule {}
