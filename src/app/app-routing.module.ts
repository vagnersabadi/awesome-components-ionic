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
  // fivethree
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
  // yannbf
  { path: 'yannbf', loadChildren: './pages/yannbf/yannbf.module#YannbfPageModule' },
  { path: 'accordion-list', loadChildren: './pages/yannbf/components/accordion-list/accordion-list.module#AccordionListPageModule' },
  { path: 'login', loadChildren: './pages/yannbf/components/login/login.module#LoginPageModule' },
  { path: 'lists', loadChildren: './pages/yannbf/components/lists/lists.module#ListsPageModule' },
  { path: 'miscellaneous', loadChildren: './pages/yannbf/components/miscellaneous/miscellaneous.module#MiscellaneousPageModule' },
  { path: 'modal-with-navigation', loadChildren: './pages/yannbf/components/modal-with-navigation/modal-with-navigation.module#ModalWithNavigationPageModule' },
  { path: 'popup-modal', loadChildren: './pages/yannbf/components/popup-modal/popup-modal.module#PopupModalPageModule' },
  { path: 'popup-fab', loadChildren: './pages/yannbf/components/popup-fab/popup-fab.module#PopupFabPageModule' },
  { path: 'popup-menu', loadChildren: './pages/yannbf/components/popup-menu/popup-menu.module#PopupMenuPageModule' },
  { path: 'profile', loadChildren: './pages/yannbf/components/profile/profile.module#ProfilePageModule' },
  { path: 'side-menu', loadChildren: './pages/yannbf/components/side-menu/side-menu.module#SideMenuPageModule' },
  { path: 'slides', loadChildren: './pages/yannbf/components/slides/slides.module#SlidesPageModule' },
  { path: 'theming', loadChildren: './pages/yannbf/components/theming/theming.module#ThemingPageModule' },
  { path: 'login-one', loadChildren: './pages/yannbf/components/login/login-one/login-one.module#LoginOnePageModule' },
  { path: 'login-instagram', loadChildren: './pages/yannbf/components/login/login-instagram/login-instagram.module#LoginInstagramPageModule' },
  { path: 'login-slider', loadChildren: './pages/yannbf/components/login/login-slider/login-slider.module#LoginSliderPageModule' },
  { path: 'login-background-slider', loadChildren: './pages/yannbf/components/login/login-background-slider/login-background-slider.module#LoginBackgroundSliderPageModule' },
  { path: 'login-background-video', loadChildren: './pages/yannbf/components/login/login-background-video/login-background-video.module#LoginBackgroundVideoPageModule' },
  { path: 'settings', loadChildren: './pages/yannbf/components/lists/settings/settings.module#SettingsPageModule' },
  { path: 'sliding-item', loadChildren: './pages/yannbf/components/lists/sliding-item/sliding-item.module#SlidingItemPageModule' },
  { path: 'delete-items', loadChildren: './pages/yannbf/components/lists/delete-items/delete-items.module#DeleteItemsPageModule' },
  { path: 'blog-post', loadChildren: './pages/yannbf/components/miscellaneous/blog-post/blog-post.module#BlogPostPageModule' },
  { path: 'charts', loadChildren: './pages/yannbf/components/miscellaneous/charts/charts.module#ChartsPageModule' },
  { path: 'chat', loadChildren: './pages/yannbf/components/miscellaneous/chat/chat.module#ChatPageModule' },
  { path: 'concert-card', loadChildren: './pages/yannbf/components/miscellaneous/concert-card/concert-card.module#ConcertCardPageModule' },
  { path: 'countdown', loadChildren: './pages/yannbf/components/miscellaneous/countdown/countdown.module#CountdownPageModule' },
  { path: 'expandable-header', loadChildren: './pages/yannbf/components/miscellaneous/expandable-header/expandable-header.module#ExpandableHeaderPageModule' },
  { path: 'flash-card', loadChildren: './pages/yannbf/components/miscellaneous/flash-card/flash-card.module#FlashCardPageModule' },
  { path: 'pinterest-masonry-cards', loadChildren: './pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.module#PinterestMasonryCardsPageModule' },
  { path: 'real-estate-listing', loadChildren: './pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.module#RealEstateListingPageModule' },
  { path: 'testimonials', loadChildren: './pages/yannbf/components/miscellaneous/testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'item-ribbon', loadChildren: './pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.module#ItemRibbonPageModule' },
  { path: 'autosizing-text-area', loadChildren: './pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.module#AutosizingTextAreaPageModule' },
  { path: 'angular-material', loadChildren: './pages/angular-material/angular-material.module#AngularMaterialPageModule' },
  { path: 'expansion', loadChildren: './pages/angular-material/components/expansion/expansion.module#ExpansionPageModule' },
  { path: 'mat-card', loadChildren: './pages/angular-material/components/mat-card/mat-card.module#MatCardPageModule' },
  { path: 'mat-stepper', loadChildren: './pages/angular-material/components/mat-stepper/mat-stepper.module#MatStepperPageModule' },
  { path: 'mat-sort-header', loadChildren: './pages/angular-material/components/mat-sort-header/mat-sort-header.module#MatSortHeaderPageModule' },
  { path: 'mat-table', loadChildren: './pages/angular-material/components/mat-table/mat-table.module#MatTablePageModule' },
  { path: 'mat-drag-drop', loadChildren: './pages/angular-material/components/mat-drag-drop/mat-drag-drop.module#MatDragDropPageModule' },
  { path: 'mat-input', loadChildren: './pages/angular-material/components/mat-input/mat-input.module#MatInputPageModule' },
  { path: 'mat-grid', loadChildren: './pages/angular-material/components/mat-grid/mat-grid.module#MatGridPageModule' },


  {
    path: 'slide-color-changing', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-color-changing/slide-color-changing.module')
        .then(m => m.SlideColorChangingPageModule)
  },
  {
    path: 'slide-custom-pagination', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.module')
        .then(m => m.SlideCustomPaginationPageModule)
  },
  {
    path: 'slide-nested', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-nested/slide-nested.module')
        .then(m => m.SlideNestedPageModule)
  },
  {
    path: 'slide-free-mode', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-free-mode/slide-free-mode.module')
        .then(m => m.SlideFreeModePageModule)
  },

  {
    path: 'slide-photo-gallery', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.module')
        .then(m => m.SlidePhotoGalleryPageModule)
  },

  {
    path: 'slide-rtl', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-rtl/slide-rtl.module')
        .then(m => m.SlideRtlPageModule)
  },
  {
    path: 'slide-transitions', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-transitions/slide-transitions.module')
        .then(m => m.SlideTransitionsPageModule)
  },
  {
    path: 'slide-walkthrough', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.module')
        .then(m => m.SlideWalkthroughPageModule)
  },
  {
    path: 'slide-list', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-list/slide-list.module')
        .then(m => m.SlideListPageModule)
  },
  {
    path: 'slide-with-arrows', loadChildren: () =>
      import('./pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.module')
        .then(m => m.SlideWithArrowsPageModule)
  },










];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
