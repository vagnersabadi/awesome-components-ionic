import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Grid5Page } from './grid5.page';

const routes: Routes = [
  {
    path: '',
    component: Grid5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Grid5PageRoutingModule {}
