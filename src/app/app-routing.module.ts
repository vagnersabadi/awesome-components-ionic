import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'fivethree',
    loadChildren: () => import('./pages/fivethree/fivethree.module').then(m => m.FivethreePageModule)
  },
  { path: 'app-bar', loadChildren: './pages/fivethree/components/app-bar/app-bar.module#AppBarPageModule' },
  { path: 'bottom-sheet', loadChildren: './pages/fivethree/components/bottom-sheet/bottom-sheet.module#BottomSheetPageModule' },
  { path: 'gallery', loadChildren: './pages/fivethree/components/gallery/gallery.module#GalleryPageModule' },
  { path: 'stepper', loadChildren: './pages/fivethree/components/stepper/stepper.module#StepperPageModule' },
  { path: 'any', loadChildren: './pages/fivethree/components/any/any.module#AnyPageModule' },
  { path: 'feature-discovery', loadChildren: './pages/fivethree/components/feature-discovery/feature-discovery.module#FeatureDiscoveryPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
