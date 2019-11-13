import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { TimelineComponent, TimelineItemComponent, TimelineTimeComponent } from './timeline-item/timeline-item.component';
import { AccordionListComponent } from './accordion-list/accordion-list.component';


export const components = [
  TimelineComponent,
  TimelineItemComponent,
  TimelineTimeComponent,
  AccordionListComponent


];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components]
})
export class YannbfComponentsModule { }
