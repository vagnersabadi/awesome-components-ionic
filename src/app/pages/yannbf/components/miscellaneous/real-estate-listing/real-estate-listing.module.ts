import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RealEstateListingPage } from './real-estate-listing.page';

const routes: Routes = [
  {
    path: '',
    component: RealEstateListingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RealEstateListingPage]
})
export class RealEstateListingPageModule {}
