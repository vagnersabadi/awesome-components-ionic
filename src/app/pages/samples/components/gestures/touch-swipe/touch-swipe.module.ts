import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouchSwipePageRoutingModule } from './touch-swipe-routing.module';

import { TouchSwipePage } from './touch-swipe.page';
import { SocialGestureModule } from 'src/app/directives/social-gestures/social-gesture.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouchSwipePageRoutingModule,
    SocialGestureModule
  ],
  declarations: [TouchSwipePage],
})
export class TouchSwipePageModule { }
