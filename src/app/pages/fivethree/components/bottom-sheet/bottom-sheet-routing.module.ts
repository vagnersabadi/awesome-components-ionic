import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomSheetPage } from './bottom-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: BottomSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomSheetPageRoutingModule {}
