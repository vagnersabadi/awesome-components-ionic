import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slide-rtl',
  templateUrl: './slide-rtl.page.html',
  styleUrls: ['./slide-rtl.page.scss'],
})
export class SlideRtlPage implements OnInit {

  @ViewChild('slider', { static: true }) slider: IonSlides;

  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
      songs: 4,
      private: false
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
      songs: 5,
      private: true
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
      songs: 12,
      private: true
    }
  ];

  slideOpts = {
    loop: true,
    autoplay: {
      delay: 2000,
    },
  };

  constructor() { }

  ngOnInit() {
  }

  onSlideChanged() {
    const currentIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', currentIndex);
  }

}
