import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
 
  // Yannbf
  { path: 'yannbf', loadChildren: () => import('./pages/yannbf/yannbf.module').then(m => m.YannbfPageModule) },
  { path: 'accordion-list', loadChildren: () => import('./pages/yannbf/components/accordion-list/accordion-list.module').then(m => m.AccordionListPageModule) },
  { path: 'login', loadChildren: () => import('./pages/yannbf/components/login/login.module').then(m => m.LoginPageModule) },
  { path: 'lists', loadChildren: () => import('./pages/yannbf/components/lists/lists.module').then(m => m.ListsPageModule) },
  { path: 'miscellaneous', loadChildren: () => import('./pages/yannbf/components/miscellaneous/miscellaneous.module').then(m => m.MiscellaneousPageModule) },
  { path: 'modal-with-navigation', loadChildren: () => import('./pages/yannbf/components/modal-with-navigation/modal-with-navigation.module').then(m => m.ModalWithNavigationPageModule) },
  { path: 'popup-modal', loadChildren: () => import('./pages/yannbf/components/popup-modal/popup-modal.module').then(m => m.PopupModalPageModule) },
  { path: 'popup-fab', loadChildren: () => import('./pages/yannbf/components/popup-fab/popup-fab.module').then(m => m.PopupFabPageModule) },
  { path: 'popup-menu', loadChildren: () => import('./pages/yannbf/components/popup-menu/popup-menu.module').then(m => m.PopupMenuPageModule) },
  { path: 'profile', loadChildren: () => import('./pages/yannbf/components/profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'side-menu', loadChildren: () => import('./pages/yannbf/components/side-menu/side-menu.module').then(m => m.SideMenuPageModule) },
  { path: 'slides', loadChildren: () => import('./pages/yannbf/components/slides/slides.module').then(m => m.SlidesPageModule) },
  { path: 'theming', loadChildren: () => import('./pages/yannbf/components/theming/theming.module').then(m => m.ThemingPageModule) },
  { path: 'login-one', loadChildren: () => import('./pages/yannbf/components/login/login-one/login-one.module').then(m => m.LoginOnePageModule) },
  { path: 'login-instagram', loadChildren: () => import('./pages/yannbf/components/login/login-instagram/login-instagram.module').then(m => m.LoginInstagramPageModule) },
  { path: 'login-slider', loadChildren: () => import('./pages/yannbf/components/login/login-slider/login-slider.module').then(m => m.LoginSliderPageModule) },
  { path: 'login-background-slider', loadChildren: () => import('./pages/yannbf/components/login/login-background-slider/login-background-slider.module').then(m => m.LoginBackgroundSliderPageModule) },
  { path: 'login-background-video', loadChildren: () => import('./pages/yannbf/components/login/login-background-video/login-background-video.module').then(m => m.LoginBackgroundVideoPageModule) },
  { path: 'settings', loadChildren: () => import('./pages/yannbf/components/lists/settings/settings.module').then(m => m.SettingsPageModule) },
  { path: 'sliding-item', loadChildren: () => import('./pages/yannbf/components/lists/sliding-item/sliding-item.module').then(m => m.SlidingItemPageModule) },
  { path: 'delete-items', loadChildren: () => import('./pages/yannbf/components/lists/delete-items/delete-items.module').then(m => m.DeleteItemsPageModule) },
  { path: 'blog-post', loadChildren: () => import('./pages/yannbf/components/miscellaneous/blog-post/blog-post.module').then(m => m.BlogPostPageModule) },
  { path: 'charts', loadChildren: () => import('./pages/yannbf/components/miscellaneous/charts/charts.module').then(m => m.ChartsPageModule) },
  { path: 'chat', loadChildren: () => import('./pages/yannbf/components/miscellaneous/chat/chat.module').then(m => m.ChatPageModule) },
  { path: 'concert-card', loadChildren: () => import('./pages/yannbf/components/miscellaneous/concert-card/concert-card.module').then(m => m.ConcertCardPageModule) },
  { path: 'countdown', loadChildren: () => import('./pages/yannbf/components/miscellaneous/countdown/countdown.module').then(m => m.CountdownPageModule) },
  { path: 'expandable-header', loadChildren: () => import('./pages/yannbf/components/miscellaneous/expandable-header/expandable-header.module').then(m => m.ExpandableHeaderPageModule) },
  { path: 'flash-card', loadChildren: () => import('./pages/yannbf/components/miscellaneous/flash-card/flash-card.module').then(m => m.FlashCardPageModule) },
  { path: 'pinterest-masonry-cards', loadChildren: () => import('./pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.module').then(m => m.PinterestMasonryCardsPageModule) },
  { path: 'real-estate-listing', loadChildren: () => import('./pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.module').then(m => m.RealEstateListingPageModule) },
  { path: 'testimonials', loadChildren: () => import('./pages/yannbf/components/miscellaneous/testimonials/testimonials.module').then(m => m.TestimonialsPageModule) },
  { path: 'item-ribbon', loadChildren: () => import('./pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.module').then(m => m.ItemRibbonPageModule) },
  { path: 'autosizing-text-area', loadChildren: () => import('./pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.module').then(m => m.AutosizingTextAreaPageModule) },

  // Angular Material
  { path: 'angular-material', loadChildren: () => import('./pages/angular-material/angular-material.module').then(m => m.AngularMaterialPageModule) },
  { path: 'expansion', loadChildren: () => import('./pages/angular-material/components/expansion/expansion.module').then(m => m.ExpansionPageModule) },
  { path: 'mat-card', loadChildren: () => import('./pages/angular-material/components/mat-card/mat-card.module').then(m => m.MatCardPageModule) },
  { path: 'mat-stepper', loadChildren: () => import('./pages/angular-material/components/mat-stepper/mat-stepper.module').then(m => m.MatStepperPageModule) },
  { path: 'mat-sort-header', loadChildren: () => import('./pages/angular-material/components/mat-sort-header/mat-sort-header.module').then(m => m.MatSortHeaderPageModule) },
  { path: 'mat-table', loadChildren: () => import('./pages/angular-material/components/mat-table/mat-table.module').then(m => m.MatTablePageModule) },
  { path: 'mat-drag-drop', loadChildren: () => import('./pages/angular-material/components/mat-drag-drop/mat-drag-drop.module').then(m => m.MatDragDropPageModule) },
  { path: 'mat-input', loadChildren: () => import('./pages/angular-material/components/mat-input/mat-input.module').then(m => m.MatInputPageModule) },
  { path: 'mat-grid', loadChildren: () => import('./pages/angular-material/components/mat-grid/mat-grid.module').then(m => m.MatGridPageModule) },
 
  {
    path: 'timeline',
    loadChildren: () => import('./pages/yannbf/components/timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'crypto-list',
    loadChildren: () => import('./pages/yannbf/components/lists/crypto-list/crypto-list.module').then( m => m.CryptoListPageModule)
  },
  {
    path: 'list-card-ui',
    loadChildren: () => import('./pages/yannbf/components/lists/list-card-ui/list-card-ui.module').then( m => m.ListCardUiPageModule)
  },
  {
    path: 'reactive-list-label',
    loadChildren: () => import('./pages/yannbf/components/lists/reactive-list-label/reactive-list-label.module').then( m => m.ReactiveListLabelPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/yannbf/components/lists/users/users.module').then( m => m.UsersPageModule)
  },

  {
    path: 'official',
    loadChildren: () => import('./pages/official/official.module').then( m => m.OfficialPageModule)
  },

  {
    path: 'buttons-official',
    loadChildren: () => import('./pages/official/components/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./pages/official/components/alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  // Fivethree
  {
    path: 'fivethree',
    loadChildren: () => import('./pages/fivethree/fivethree.module').then( m => m.FivethreePageModule)
  },
  {
    path: 'app-bar',
    loadChildren: () => import('./pages/fivethree/components/app-bar/app-bar.module').then( m => m.AppBarPageModule)
  },
  {
    path: 'bottom-sheet',
    loadChildren: () => import('./pages/fivethree/components/bottom-sheet/bottom-sheet.module').then( m => m.BottomSheetPageModule)
  },
  {
    path: 'dialog',
    loadChildren: () => import('./pages/fivethree/components/dialog/dialog.module').then( m => m.DialogPageModule)
  },
  {
    path: 'editable-label',
    loadChildren: () => import('./pages/fivethree/components/editable-label/editable-label.module').then( m => m.EditableLabelPageModule)
  },
  {
    path: 'expandable',
    loadChildren: () => import('./pages/fivethree/components/expandable/expandable.module').then( m => m.ExpandablePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/fivethree/components/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'feature-discovery',
    loadChildren: () => import('./pages/fivethree/components/feature-discovery/feature-discovery.module').then( m => m.FeatureDiscoveryPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/fivethree/components/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'icon',
    loadChildren: () => import('./pages/fivethree/components/icon/icon.module').then( m => m.IconPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/fivethree/components/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'refresh',
    loadChildren: () => import('./pages/fivethree/components/refresh/refresh.module').then( m => m.RefreshPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./pages/fivethree/components/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'stepper',
    loadChildren: () => import('./pages/fivethree/components/stepper/stepper.module').then( m => m.StepperPageModule)
  },
  {
    path: 'viewport',
    loadChildren: () => import('./pages/fivethree/components/viewport/viewport.module').then( m => m.ViewportPageModule)
  },

  // SAMPLES
  {
    path: 'samples',
    loadChildren: () => import('./pages/samples/samples.module').then( m => m.SamplesPageModule)
  },
  {
    path: 'clones-ui',
    loadChildren: () => import('./pages/clones-ui/clones-ui.module').then( m => m.ClonesUiPageModule)
  }






  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
