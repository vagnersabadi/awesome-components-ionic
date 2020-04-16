import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClonesUiPage } from './clones-ui.page';

const routes: Routes = [
  {
    path: '',
    component: ClonesUiPage
  },
  {
    path: 'instagram',
    loadChildren: () => import('./components/instagram/instagram.module').then( m => m.InstagramPageModule)
  },
  {
    path: 'netflix',
    loadChildren: () => import('./components/netflix/netflix.module').then( m => m.NetflixPageModule)
  },
  {
    path: 'uber',
    loadChildren: () => import('./components/uber/uber.module').then( m => m.UberPageModule)
  },
  {
    path: 'whatsapp',
    loadChildren: () => import('./components/whatsapp/whatsapp.module').then( m => m.WhatsappPageModule)
  },  {
    path: 'tinder',
    loadChildren: () => import('./components/tinder/tinder.module').then( m => m.TinderPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClonesUiPageRoutingModule {}
