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
    },
    {
      title: 'List Card UI',
      page: '/list-card-ui'
    },
    {
      title: 'Reactive List Label',
      page: '/reactive-list-label'
    },
    {
      title: 'Users',
      page: '/users'
    }

    ,
    {
      title: 'Timeline',
      page: '/timeline'
    }

    
  ];


  constructor() { }

  ngOnInit() {
  }

}
