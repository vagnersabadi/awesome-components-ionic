import { FlashCardComponent } from './flash-card/flash-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { TimerProgressComponent } from './timer-progress/timer-progress.component';
import { TimerComponent } from './timer/timer.component';
import { CommonModule } from '@angular/common';
import { TimelineItemComponent, TimelineComponent } from './timeline/timeline.component';


export const components = [
  AccordionListComponent,
  FlashCardComponent,
  TimerProgressComponent,
  TimerComponent,
  TimelineComponent,
  TimelineItemComponent

];

@NgModule({
  declarations: [components],
  imports: [IonicModule, CommonModule],
  exports: [components]
})
export class YannbfComponentsModule { }
