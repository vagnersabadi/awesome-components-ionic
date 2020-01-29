import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {


  items: Array<{ title: string, page: any }> = [
    {
      title: 'Cripto List',
      page: '/crypto-list'
    },
    {
      title: 'Settings List',
      page: '/settings'
    },
    {
      title: 'Sliding Item',
      page: '/sliding-item'
    },
    {
      title: 'Delete Items',
      page: '/delete-items'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
