import { FlashCardComponent } from './flash-card/flash-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { TimerProgressComponent } from './timer-progress/timer-progress.component';
import { TimerComponent } from './timer/timer.component';
import { CommonModule } from '@angular/common';


export const components = [
  AccordionListComponent,
  FlashCardComponent,
  TimerProgressComponent,
  TimerComponent,

];

@NgModule({
  declarations: [components],
  imports: [IonicModule, CommonModule],
  exports: [components]
})
export class YannbfComponentsModule { }
