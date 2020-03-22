import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplesPage } from './samples.page';

const routes: Routes = [
  {
    path: '',
    component: SamplesPage
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./components/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplesPageRoutingModule {}
