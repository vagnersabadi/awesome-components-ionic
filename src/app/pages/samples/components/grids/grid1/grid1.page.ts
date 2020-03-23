import { GridServiceService } from './../../../../../services/grid/grid-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.page.html',
  styleUrls: ['./grid1.page.scss'],
})
export class Grid1Page implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;
  public products: Array<any>;
  segment = '';
  index = 0;
  data: Array<any> = [];

  constructor(public gridServ: GridServiceService) {
    this.products = this.gridServ.products_1;
    this.data = this.gridServ.tabs;
  }

  ngOnInit() {
  }

  segmentChange(event) {
    console.log('event', event)
    this.segment = event.detail.value;
  }

  updateSlide(i) {
    console.log('index', i, typeof (i))
    this.slides.slideTo(i, 300)
  }
  
  async change() {
    await this.slides.getActiveIndex().then(data => this.index = data);
    this.segment = this.data[this.index].title;
    this.drag();
  }

  drag() {
    let distanceToScroll = 0;
    for (const index in this.data) {
      if (parseInt(index) < this.index) {
        distanceToScroll = distanceToScroll + document.getElementById('seg_' + index).offsetWidth + 24
      }
    }
    document.getElementById('dag').scrollLeft = distanceToScroll;
  }
}
