import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiAvatarPage } from './ui-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: UiAvatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiAvatarPageRoutingModule {}
