import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Grid7Page } from './grid7.page';

const routes: Routes = [
  {
    path: '',
    component: Grid7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Grid7PageRoutingModule {}
