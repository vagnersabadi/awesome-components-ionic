import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouchSwipePageRoutingModule } from './touch-swipe-routing.module';

import { TouchSwipePage } from './touch-swipe.page';

import { SocialGestureDirective } from './../../../../../directives/social-gestures/social-gestures.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouchSwipePageRoutingModule
  ],
  declarations: [TouchSwipePage, SocialGestureDirective],
})
export class TouchSwipePageModule { }
