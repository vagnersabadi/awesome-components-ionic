import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-official',
  templateUrl: './official.page.html',
  styleUrls: ['./official.page.scss'],
})
export class OfficialPage implements OnInit {

  pages = [
    {
      namePage: 'Buttons',
      router: '/buttons-official',
    },
    {
      namePage: 'Alerts',
      router: '/alerts',
    },
    {
      namePage: 'Cards',
      router: '/official/cards',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
