import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipelinePage } from './pipeline.component';


const routes: Routes = [
  {
    path: '',
    component: PipelinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipelinePageRoutingModule {}
