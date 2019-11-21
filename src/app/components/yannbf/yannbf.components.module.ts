import { FlashCardComponent } from './flash-card/flash-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { TimelineComponent, TimelineItemComponent, TimelineTimeComponent } from './timeline-item/timeline-item.component';
import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { TimerProgressComponent } from './timer-progress/timer-progress.component';
import { TimerComponent } from './timer/timer.component';
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './expandable/expandable.component';


export const components = [
  TimelineComponent,
  TimelineItemComponent,
  TimelineTimeComponent,
  AccordionListComponent,
  FlashCardComponent,
  TimerProgressComponent,
  TimerComponent,
  // ExpandableComponent


];

@NgModule({
  declarations: [components],
  imports: [IonicModule,CommonModule],
  exports: [components]
})
export class YannbfComponentsModule { }
