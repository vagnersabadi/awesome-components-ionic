import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepperPage } from './stepper.page';

const routes: Routes = [
  {
    path: '',
    component: StepperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepperPageRoutingModule {}
