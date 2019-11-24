import { NgModule, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TinderCardsPage } from './tinder-cards.page';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< develop
<<<<<<< develop

=======
import { SwingModule } from 'angular2-swing';
>>>>>>> Expandble
=======

>>>>>>> Reset page tinder cards
const routes: Routes = [
  {
    path: '',
    component: TinderCardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
<<<<<<< develop
<<<<<<< develop

=======
    HttpClientModule,
    SwingModule
>>>>>>> Expandble
=======

>>>>>>> Reset page tinder cards
  ],
  declarations: [TinderCardsPage]
})
export class TinderCardsPageModule { }
