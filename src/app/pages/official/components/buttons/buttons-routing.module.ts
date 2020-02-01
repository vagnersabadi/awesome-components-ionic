import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsPage } from './buttons.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsPageRoutingModule {}
