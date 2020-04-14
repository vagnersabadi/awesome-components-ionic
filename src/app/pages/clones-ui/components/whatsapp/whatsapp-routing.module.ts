import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsappPage } from './whatsapp.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsappPageRoutingModule {}
