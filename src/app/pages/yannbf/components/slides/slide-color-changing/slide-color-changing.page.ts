import { IonSlides } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide-color-changing',
  templateUrl: './slide-color-changing.page.html',
  styleUrls: ['./slide-color-changing.page.scss'],
})
export class SlideColorChangingPage implements OnInit {

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

  color: any;
  colors = ['#e43737', '#e0e437', '#37e446', '#375be4', '#972cb1'];


  constructor() {
    this.color = this.colors[0];
  }

  ngOnInit() {
  }

  onSlideChanged() {
    this.slider.getActiveIndex().then((currentIndex) => {
      this.color = this.colors[currentIndex];
      console.log('Slide changed! Current index is', currentIndex);
    })

  }

}
