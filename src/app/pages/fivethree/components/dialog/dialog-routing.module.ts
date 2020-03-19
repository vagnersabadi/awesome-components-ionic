import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogPage } from './dialog.page';

const routes: Routes = [
  {
    path: '',
    component: DialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogPageRoutingModule {}
