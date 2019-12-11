import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slide-custom-pagination',
  templateUrl: './slide-custom-pagination.page.html',
  styleUrls: ['./slide-custom-pagination.page.scss'],
})
export class SlideCustomPaginationPage implements OnInit {

  @ViewChild('sliderOne', { static: true }) sliderOne: IonSlides;
  @ViewChild('sliderTwo', { static: true }) sliderTwo: IonSlides;
  @ViewChild('sliderThree', { static: true }) sliderThree: IonSlides;

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

  constructor() { }

  ngOnInit() {
    // this.sliderOne.paginationBulletRender = (index, className) => {
    //   return `<span class="custom-pagination ${className}>${index + 1}</span>`;
    // };

    // this.sliderTwo.paginationBulletRender = (index, className) => {
    //   return `<span class="custom-pagination-2 ${className}>${index + 1}</span>`;
    // };

    // this.sliderThree.paginationBulletRender = (index, className) => {
    //   return `<span class="custom-pagination-3 bullet-icon-${index + 1} ${className}></span>`;
    // };
  }

}
