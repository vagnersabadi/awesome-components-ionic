import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  items = [
    {
      title: 'Carousel',
      page: 'slide-carousel'
    },
    {
      title: 'Color changing sliders',
      page: 'slide-color-changing'
    },
    {
      title: 'Custom pagination',
      page: 'slide-custom-pagination'
    },
    {
      title: 'Free mode slide (no fixed positions)',
      page: 'slide-free-mode'
    },
    {
      title: 'List of Sliders',
      page: 'slide-list'
    },
    {
      title: 'Nested slides',
      page: 'slide-nested'
    },
    {
      title: 'Slide transitions',
      page: 'slide-transitions'
    },
    {
      title: 'Slide right to left',
      page: 'slide-rtl'
    },
    {
      title: 'Slide with pagination arrows',
      page: 'slide-with-arrows'
    },
    {
      title: 'Slide Walkthrough',
      page: 'slide-walkthrough'
    },
    {
      title: 'Photo Gallery (not working)',
      page: 'slide-photo-gallery'
    },
    {
      title: 'Slide Pagination',
      page: 'slide-pagination'
    },
    

    
  ];

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  itemTapped(event, item) {
    this.navCtrl.navigateForward(item.page);
  }

}
