import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SlideDrawerComponent } from './slide-drawer/slide-drawer.component';


export const components = [
  SlideDrawerComponent
];

@NgModule({
  declarations: [components],
  imports: [IonicModule, CommonModule],
  exports: [components]
})
export class UiComponentsModule { }
