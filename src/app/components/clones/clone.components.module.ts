import { InstagramComponent } from './instagram-ui/insta.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


export const components = [
  InstagramComponent

];

@NgModule({
  declarations: [components],
  imports: [IonicModule, CommonModule],
  exports: [components]
})
export class CloneComponentsModule { }
