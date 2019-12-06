import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slide-free-mode',
  templateUrl: './slide-free-mode.page.html',
  styleUrls: ['./slide-free-mode.page.scss'],
})
export class SlideFreeModePage implements OnInit {

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
    effect: 'fade',
    freeMode: true,
    loop: true,
    speed: 1500,
    slidesPerView: 2,
    spaceBetween: 10,
  };

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.slides.push(this.slides[i % 4]);
    }
  }

  ngOnInit() {
  }

}
