import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouchSwipePage } from './touch-swipe.page';

const routes: Routes = [
  {
    path: '',
    component: TouchSwipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouchSwipePageRoutingModule {}
