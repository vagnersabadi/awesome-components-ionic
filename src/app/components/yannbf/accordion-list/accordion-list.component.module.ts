import { IonicModule } from '@ionic/angular';
import { AccordionListComponent } from './accordion-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:
    [
      AccordionListComponent
    ],
  imports:
    [
      CommonModule,
      IonicModule
    ],
  exports:
    [
      AccordionListComponent
    ]
})
export class AccordionListComponentModule { }
