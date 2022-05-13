import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { PipelinePage } from './pipeline.component';
import { PipelinePageRoutingModule } from './pipeline-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SocialGestureModule } from 'src/app/directives/social-gestures/social-gesture.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    PipelinePageRoutingModule,
    SocialGestureModule
  ],
  declarations: [PipelinePage]
})
export class PipelinePageModule {}
