import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepperPageRoutingModule } from './stepper-routing.module';

import { StepperPage } from './stepper.page';
import { FivStepperModule } from '@fivethree/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepperPageRoutingModule,
    FivStepperModule 
  ],
  declarations: [StepperPage]
})
export class StepperPageModule {}
