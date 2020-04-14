import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditableLabelPage } from './editable-label.page';

const routes: Routes = [
  {
    path: '',
    component: EditableLabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditableLabelPageRoutingModule {}
