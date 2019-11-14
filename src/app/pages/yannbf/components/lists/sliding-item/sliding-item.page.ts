import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-item',
  templateUrl: './sliding-item.page.html',
  styleUrls: ['./sliding-item.page.scss'],
})
export class SlidingItemPage implements OnInit {

  items = [
    {
      imageUrl: 'assets/yannbf/img/lists/stadium.jpg',
      title: 'First Cup',
      place: 'Madison Square',
      date: '05/06/2016'
    },
    {
      imageUrl: 'assets/yannbf/img/lists/stadium-3.png',
      title: 'Season',
      place: 'Hooli',
      date: '15/03/2016'
    },
    {
      imageUrl: 'assets/yannbf/img/lists/stadium-2.jpg',
      title: '2nd Season',
      place: 'Castelão',
      date: '05/12/2015'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  delete(item) {
    alert('Deleted ' + item.title);
  }

  viewComments(item) {
    alert('Viewing comments of ' + item.title);
  }

  viewPlayers(item) {
    alert('Viewing players of ' + item.title);
  }

}
