import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidePaginationPage } from './slide-pagination.page';

const routes: Routes = [
  {
    path: '',
    component: SlidePaginationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidePaginationPageRoutingModule {}
