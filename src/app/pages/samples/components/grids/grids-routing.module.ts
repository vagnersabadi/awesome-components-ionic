import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridsPage } from './grids.page';

const routes: Routes = [
  {
    path: '',
    component: GridsPage
  },
  {
    path: 'grid1',
    loadChildren: () => import('./grid1/grid1.module').then( m => m.Grid1PageModule)
  },
  {
    path: 'grid2',
    loadChildren: () => import('./grid2/grid2.module').then( m => m.Grid2PageModule)
  },
  {
    path: 'grid3',
    loadChildren: () => import('./grid3/grid3.module').then( m => m.Grid3PageModule)
  },
  {
    path: 'grid4',
    loadChildren: () => import('./grid4/grid4.module').then( m => m.Grid4PageModule)
  },
  {
    path: 'grid5',
    loadChildren: () => import('./grid5/grid5.module').then( m => m.Grid5PageModule)
  },
  {
    path: 'grid6',
    loadChildren: () => import('./grid6/grid6.module').then( m => m.Grid6PageModule)
  },
  {
    path: 'grid7',
    loadChildren: () => import('./grid7/grid7.module').then( m => m.Grid7PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridsPageRoutingModule {}
