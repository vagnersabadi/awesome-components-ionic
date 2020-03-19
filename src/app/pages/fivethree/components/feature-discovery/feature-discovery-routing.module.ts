import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureDiscoveryPage } from './feature-discovery.page';

const routes: Routes = [
  {
    path: '',
    component: FeatureDiscoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureDiscoveryPageRoutingModule {}
