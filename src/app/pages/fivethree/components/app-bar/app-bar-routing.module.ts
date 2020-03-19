import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBarPage } from './app-bar.page';

const routes: Routes = [
  {
    path: '',
    component: AppBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBarPageRoutingModule {}
