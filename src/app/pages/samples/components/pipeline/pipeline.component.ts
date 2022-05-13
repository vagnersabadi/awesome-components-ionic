import { CdkDragDrop, CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelinePage implements OnInit {

  openSearch = false;
  blockTap = false;

  stages: any[] = [
    {
      color: '#f8b62c',
      name: 'Stage 1',
      deal: [
        {
          name: 'Deal 1',
        },
        {
          name: 'Deal 2',
        },
      ]
    },
    {
      color: '#30B949',
      name: 'Stage 2',
      deal: [
        {
          name: 'Deal 1',
        },
        {
          name: 'Deal 2',
        },
        {
          name: 'Deal 3',
        }
      ]
    },

    {
      color: '#1A1710',
      name: 'Stage 3',
      deal: [
        {
          name: 'Deal 1',
        },
        {
          name: 'Deal 2',
        },
        {
          name: 'Deal 3',
        }
      ]
    },
  ];

  sliderConfig = {
    initialSlide: 0,
    loop: false,
    allowTouchMove: false,
    freemode: {
      freeModeMomentum: false,
    }
  };

  gestureOpts: any[] = [
    { name: 'tap' },
    { name: 'press', interval: 2000 },
  ];

  swipeStage: any[] = [
    { name: 'swipe' },
  ];

  @ViewChild('slider', { static: true }) slider: IonSlides;
  @ViewChild('segment', { static: true }) segment: IonSegment;

  inMotionStage = false;
  dealMove: any;
  time = 0;


  constructor() { }

  ngOnInit() {
  }


  async stageSegmentChanged(event) {
    const position = event.detail.value;
    this.slider.slideTo(position);
  }

  async activeSlide() {
    const index = await this.slider.getActiveIndex();
    this.segment.value = index.toString();
    this.time = 0;
  }

  async prevStage() {
    await this.slider.slidePrev();
  }

  async nextStage() {
    await this.slider.slideNext();
  }

  onSwipeEnd(ev) {
    this.inMotionStage = false;
  }

  onSwipe(ev: any) {
    if (ev.deltaX > 100 && !this.inMotionStage) {
      // move out size screen view RIGHT
      this.inMotionStage = true;
      this.prevStage();
    } else if (ev.deltaX < -100 && !this.inMotionStage) {
      // move out size screen view LEFT
      this.inMotionStage = true;
      this.nextStage();
    }
  }

  async drop(event: CdkDragDrop<any[]>, indexOrigen: number) {
    const indexCurrent = await this.slider.getActiveIndex();
    this.time = 0;

  }

  async tapDeal(deal: any) {
    console.log('tapDeal', deal);
  }

  toBlockTap(blockTap) {
    this.blockTap = blockTap;
  }

  /**
   * State of moving card back and forth between steps
   * @param event CdkDragMove
   * @param stageIndex index Stage
   * @param indexDealMoved index Deal
   */
  moved(event: CdkDragMove<any>, stageIndex: number, indexDealMoved: number) {
    const directionX = event.delta.x;
    const distanceX = event.distance.x;

    if (directionX === 1 && distanceX > 30) {
      this.time++;
      if (this.time > 30) {
        this.dealMove = this.stages[stageIndex].deal[indexDealMoved];
        this.time = 0;
        this.nextStage();
      }

    } else if (directionX === -1 && distanceX < -30) {
      this.time--;
      if (this.time < -30) {
        this.dealMove = this.stages[stageIndex].deal[indexDealMoved];
        this.time = 0;
        this.prevStage();
      }
    }
  }

}
