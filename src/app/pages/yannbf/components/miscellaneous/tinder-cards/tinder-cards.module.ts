import { NgModule, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TinderCardsPage } from './tinder-cards.page';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< develop

=======
import { SwingModule } from 'angular2-swing';
>>>>>>> Expandble
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

=======
    HttpClientModule,
    SwingModule
>>>>>>> Expandble
  ],
  declarations: [TinderCardsPage]
})
export class TinderCardsPageModule { }
