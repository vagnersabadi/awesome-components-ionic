import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiBrandPage } from './ui-brand.page';

const routes: Routes = [
  {
    path: '',
    component: UiBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiBrandPageRoutingModule {}
