import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concert-card',
  templateUrl: './concert-card.page.html',
  styleUrls: ['./concert-card.page.scss'],
})
export class ConcertCardPage implements OnInit {

  concerts = [
    {
      name: 'yeezy world tour 2017',
      artistName: 'Kanye West',
      artistImage: 'assets/yannbf/img/misc/kanye_west.png',
      color: '#f73e53'
    },
    {
      name: 'yeezy world tour 2017',
      artistName: 'Kanye West',
      artistImage: 'assets/yannbf/img/misc/kanye_west.png',
      color: '#0be3ff'
    },
    {
      name: 'yeezy world tour 2017',
      artistName: 'Kanye West',
      artistImage: 'assets/yannbf/img/misc/kanye_west.png',
      color: '#fdd427'
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
