import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficialPage } from './official.page';

const routes: Routes = [
  {
    path: '',
    component: OfficialPage
  },
  {
    path: 'cards',
    loadChildren: () => import('./components/cards/cards.module').then( m => m.CardsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficialPageRoutingModule {}
