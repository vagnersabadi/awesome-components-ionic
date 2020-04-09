import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-slide-pagination',
  templateUrl: './slide-pagination.page.html',
  styleUrls: ['./slide-pagination.page.scss'],
})
export class SlidePaginationPage implements OnInit {
  @ViewChild('slider', { static: true }) slider: IonSlides;
  @ViewChild('segment', { static: true }) segment: IonSegment;
  @ViewChild('segmentFooter', { static: true }) segmentFooter: IonSegment;

  sliderConfig = {
    initialSlide: 0,
    loop: false,
    freemode: {
      freeModeMomentum: false,
    }
  };


  constructor() { }

  ngOnInit() {
  }

  prevStage() {
    this.slider.slidePrev();
    this.activeSlide();
  }

  nextStage() {
    this.slider.slideNext();
    this.activeSlide();
  }

  async activeSlide() {
    const index = await this.slider.getActiveIndex();
    this.segment.value = index.toString();
    this.segmentFooter.value = index.toString();
  }

  stageSegmentChanged(event) {
    this.slider.slideTo(event.detail.value);
  }


}
