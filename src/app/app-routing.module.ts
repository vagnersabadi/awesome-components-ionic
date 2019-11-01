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
  { path: 'feature-discovery', loadChildren: './pages/fivethree/components/feature-discovery/feature-discovery.module#FeatureDiscoveryPageModule' },
  { path: 'dialog', loadChildren: './pages/fivethree/components/dialog/dialog.module#DialogPageModule' },
  { path: 'editable-label', loadChildren: './pages/fivethree/components/editable-label/editable-label.module#EditableLabelPageModule' },
  { path: 'expandable', loadChildren: './pages/fivethree/components/expandable/expandable.module#ExpandablePageModule' },
  { path: 'searchbar', loadChildren: './pages/fivethree/components/searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'fab', loadChildren: './pages/fivethree/components/fab/fab.module#FabPageModule' },
  { path: 'icon', loadChildren: './pages/fivethree/components/icon/icon.module#IconPageModule' },
  { path: 'loading', loadChildren: './pages/fivethree/components/loading/loading.module#LoadingPageModule' },
  { path: 'password', loadChildren: './pages/fivethree/components/password/password.module#PasswordPageModule' },
  { path: 'refresh', loadChildren: './pages/fivethree/components/refresh/refresh.module#RefreshPageModule' },
  { path: 'viewport', loadChildren: './pages/fivethree/components/viewport/viewport.module#ViewportPageModule' },
  { path: 'buttons', loadChildren: './pages/fivethree/components/buttons/buttons.module#ButtonsPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
