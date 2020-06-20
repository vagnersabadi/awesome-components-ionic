import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KikstartUiPage } from './kikstart-ui.page';

const routes: Routes = [
  {
    path: '',
    component: KikstartUiPage
  },
  {
    path: 'ui-avatar',
    loadChildren: () => import('./components/ui-avatar/ui-avatar.module').then( m => m.UiAvatarPageModule)
  },
  {
    path: 'ui-brand',
    loadChildren: () => import('./components/ui-brand/ui-brand.module').then( m => m.UiBrandPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KikstartUiPageRoutingModule {}
