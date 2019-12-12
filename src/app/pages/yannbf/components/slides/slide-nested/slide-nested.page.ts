import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-nested',
  templateUrl: './slide-nested.page.html',
  styleUrls: ['./slide-nested.page.scss'],
})
export class SlideNestedPage implements OnInit {

  slides = [{
    title: 'Dream\'s Adventure',
    imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
  },
  {
    title: 'For the Weekend',
    imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
  },
  {
    title: 'Family Time',
    imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
  },
  {
    title: 'My Trip',
    imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
  }
  ];

  slideOpts = {
    direction: 'vertical',
    slidesPerView: 1,
  };

  constructor() { }

  ngOnInit() {
  }

}
