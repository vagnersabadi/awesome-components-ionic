import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveListLabelPage } from './reactive-list-label.page';

const routes: Routes = [
  {
    path: '',
    component: ReactiveListLabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveListLabelPageRoutingModule {}
