import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-photo-gallery',
  templateUrl: './slide-photo-gallery.page.html',
  styleUrls: ['./slide-photo-gallery.page.scss'],
})
export class SlidePhotoGalleryPage implements OnInit {

  slides = [
    {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/1',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/2',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/3',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/4',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/5',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/6',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/7',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/8',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/9',
    }, {
      imageUrl: 'http://lorempixel.com/1200/1200/nature/10',
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
