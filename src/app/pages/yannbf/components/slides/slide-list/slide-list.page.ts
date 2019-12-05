import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.page.html',
  styleUrls: ['./slide-list.page.scss'],
})
export class SlideListPage implements OnInit {
  items = [
    {
      name: 'one',
      slides: [{
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
      }]
    },
    {
      name: 'one',
      slides: [
        {
          title: 'My Trip',
          imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
          songs: 12,
          private: true
        },
        {
          title: 'Dream\'s Adventure',
          imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
          songs: 2,
          private: false
        },
        {
          title: 'Family Time',
          imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
          songs: 5,
          private: true
        },]
    },
    {
      name: 'one',
      slides: [
        {
          title: 'For the Weekend',
          imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
          songs: 4,
          private: false
        },
        {
          title: 'Dream\'s Adventure',
          imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
          songs: 2,
          private: false
        },
        {
          title: 'Dream\'s Adventure',
          imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
          songs: 2,
          private: false
        },
        {
          title: 'Family Time',
          imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
          songs: 5,
          private: true
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
        }]
    }
  ];

  slideOptsProgressbar: any = {
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: (swiper, current, total) => {
        return this.customProgressBar(current, total);
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

  private customProgressBar(current: number, total: number): string {
    const ratio: number = current / total;

    const progressBarStyle: string = 'style=\'transform: translate3d(0px, 0px, 0px) scaleX(' + ratio + ') scaleY(1); transition-duration: 300ms;\'';
    const progressBar: string = '<span class=\'swiper-pagination-progressbar-fill\' ' + progressBarStyle + '></span>';

    let progressBarContainer: string = '<div class=\'swiper-pagination-progressbar\' style=\'height: 4px; top: 6px; width: 100%;\'>';
    progressBarContainer += progressBar;
    progressBarContainer += '</span></div>';

    return progressBarContainer;
  }

}
