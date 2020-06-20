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
  },
  {
    path: 'ui-button',
    loadChildren: () => import('./components/ui-button/ui-button.module').then( m => m.UiButtonPageModule)
  },
  {
    path: 'ui-card',
    loadChildren: () => import('./components/ui-card/ui-card.module').then( m => m.UiCardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KikstartUiPageRoutingModule {}
