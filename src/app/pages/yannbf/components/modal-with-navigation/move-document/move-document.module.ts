import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoveDocumentPage } from './move-document.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [MoveDocumentPage],
  entryComponents: [MoveDocumentPage]
})
export class MoveDocumentPageModule {}
