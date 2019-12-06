import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slide-walkthrough',
  templateUrl: './slide-walkthrough.page.html',
  styleUrls: ['./slide-walkthrough.page.scss'],
})
export class SlideWalkthroughPage implements OnInit {

  @ViewChild('slider', { static: true }) slider: IonSlides;
  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
      description: 'Take a look at our amazing options',
    }
  ];

  slideOpts1 = {
    autoplay: {
      delay: 3000,
    },
  };

  constructor() { }

  ngOnInit() {
  }

  onSlideChanged() {
    this.slider.getActiveIndex().then((index) => {
      console.log('Slide changed! Current index is', index);
      this.slideIndex  = index;
    });
  }

  goToApp() {
    console.log('Go to App clicked');
  }

  skip() {
    console.log('Skip clicked');
  }

}
