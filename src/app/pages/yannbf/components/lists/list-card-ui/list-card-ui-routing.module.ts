import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCardUiPage } from './list-card-ui.page';

const routes: Routes = [
  {
    path: '',
    component: ListCardUiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCardUiPageRoutingModule {}
