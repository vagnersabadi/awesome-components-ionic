import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.page.html',
  styleUrls: ['./netflix.page.scss'],
})
export class NetflixPage implements OnInit {

  public netflixSeriesData = {
    banner: {
      image: 'assets/clones/netflix/wonder.jpg',
      title: 'Wonder Woman'
    },
    upcoming: {
      image: 'assets/clones/netflix/into-the-wild.jpg',
      title: 'Into the wild',
      date: 'March 29'
    },
    trays_before: [
      {
        title: 'Popular on Netflix',
        items: [
          { title: 'The Fury', image: 'assets/clones/netflix/1.png' },
          { title: 'Gone Girl', image: 'assets/clones/netflix/2.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/clones/netflix/3.png' },
          { title: 'Tombstones', image: 'assets/clones/netflix/4.png' },
          { title: 'Captain America', image: 'assets/clones/netflix/5.png' },
          { title: 'Let\'s be cops', image: 'assets/clones/netflix/6.png' },
          { title: 'Annabelle', image: 'assets/clones/netflix/7.png' },
          { title: 'Transformers', image: 'assets/clones/netflix/8.png' },
          { title: 'The Grand Budapest Hotel', image: 'assets/clones/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/clones/netflix/10.png' },
          { title: 'Edge of Tomorrow', image: 'assets/clones/netflix/11.png' },
          { title: 'Frozen', image: 'assets/clones/netflix/12.png' },
          { title: 'Fault in our stars', image: 'assets/clones/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/clones/netflix/14.png' },
        ]
      },
      {
        title: 'Recommended for you',
        items: [
          { title: 'Frozen', image: 'assets/clones/netflix/12.png' },
          { title: 'Transformers', image: 'assets/clones/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/clones/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/clones/netflix/2.png' },
          { title: 'Tombstones', image: 'assets/clones/netflix/4.png' },
          { title: 'Captain America', image: 'assets/clones/netflix/5.png' },
          { title: 'Annabelle', image: 'assets/clones/netflix/7.png' },
          { title: 'The Fury', image: 'assets/clones/netflix/1.png' },
          { title: 'The Grand Budapest Hotel', image: 'assets/clones/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/clones/netflix/10.png' },
          { title: 'Let\'s be cops', image: 'assets/clones/netflix/6.png' },
          { title: 'Edge of Tomorrow', image: 'assets/clones/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/clones/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/clones/netflix/14.png' },
        ]
      }
    ],
    trays_after: [
      {
        title: 'My List',
        items: [
          { title: 'Captain America', image: 'assets/clones/netflix/5.png' },
          { title: 'Annabelle', image: 'assets/clones/netflix/7.png' },
          { title: 'The Fury', image: 'assets/clones/netflix/1.png' },
          { title: 'Edge of Tomorrow', image: 'assets/clones/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/clones/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/clones/netflix/14.png' },
        ]
      },
      {
        title: 'Continue watching for Abhi',
        continue: true,
        items: [
          { title: 'Frozen', image: 'assets/clones/netflix/12.png' },
          { title: 'Transformers', image: 'assets/clones/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/clones/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/clones/netflix/2.png' }
        ]
      },
    ]
  };
  public netflixMoviesData = {
    banner: {
      image: 'assets/clones/netflix/exorcist.jpg',
      title: 'The Exorcist'
    },
    upcoming: {
      image: 'assets/clones/netflix/got.jpg',
      title: 'Game of Thrones',
      date: 'July 29'
    },
    trays_before: [
      {
        title: 'Popular on Netflix',
        items: [
          { title: 'The Grand Budapest Hotel', image: 'assets/clones/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/clones/netflix/10.png' },
          { title: 'Edge of Tomorrow', image: 'assets/clones/netflix/11.png' },
          { title: 'Frozen', image: 'assets/clones/netflix/12.png' },
          { title: 'Fault in our stars', image: 'assets/clones/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/clones/netflix/14.png' },
          { title: 'The Fury', image: 'assets/clones/netflix/1.png' },
          { title: 'Gone Girl', image: 'assets/clones/netflix/2.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/clones/netflix/3.png' },
          { title: 'Tombstones', image: 'assets/clones/netflix/4.png' },
          { title: 'Captain America', image: 'assets/clones/netflix/5.png' },
          { title: 'Let\'s be cops', image: 'assets/clones/netflix/6.png' },
          { title: 'Annabelle', image: 'assets/clones/netflix/7.png' },
          { title: 'Transformers', image: 'assets/clones/netflix/8.png' }
        ]
      },
      {
        title: 'Recommended for you',
        items: [
          { title: 'Annabelle', image: 'assets/clones/netflix/7.png' },
          { title: 'The Fury', image: 'assets/clones/netflix/1.png' },
          { title: 'The Grand Budapest Hotel', image: 'assets/clones/netflix/9.png' },
          { title: 'The Divergent', image: 'assets/clones/netflix/10.png' },
          { title: 'Let\'s be cops', image: 'assets/clones/netflix/6.png' },
          { title: 'Edge of Tomorrow', image: 'assets/clones/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/clones/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/clones/netflix/14.png' },
          { title: 'Frozen', image: 'assets/clones/netflix/12.png' },
          { title: 'Transformers', image: 'assets/clones/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/clones/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/clones/netflix/2.png' },
          { title: 'Tombstones', image: 'assets/clones/netflix/4.png' },
          { title: 'Captain America', image: 'assets/clones/netflix/5.png' },
        ]
      }
    ],
    trays_after: [
      {
        title: 'My List',
        items: [
          { title: 'Captain America', image: 'assets/clones/netflix/5.png' },
          { title: 'Annabelle', image: 'assets/clones/netflix/7.png' },
          { title: 'The Fury', image: 'assets/clones/netflix/1.png' },
          { title: 'Edge of Tomorrow', image: 'assets/clones/netflix/11.png' },
          { title: 'Fault in our stars', image: 'assets/clones/clones/netflix/13.png' },
          { title: 'Maleficent', image: 'assets/clones/netflix/14.png' },
        ]
      },
      {
        title: 'Continue watching for Abhi',
        continue: true,
        items: [
          { title: 'Frozen', image: 'assets/clones/netflix/12.png' },
          { title: 'Transformers', image: 'assets/clones/netflix/8.png' },
          { title: 'Guardians of the Galaxy', image: 'assets/clones/netflix/3.png' },
          { title: 'Gone Girl', image: 'assets/clones/netflix/2.png' }
        ]
      },
    ]
  };
  public segmentTab = 'series';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
  }

}
