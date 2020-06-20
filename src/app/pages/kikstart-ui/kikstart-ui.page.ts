import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kikstart-ui',
  templateUrl: './kikstart-ui.page.html',
  styleUrls: ['./kikstart-ui.page.scss'],
})
export class KikstartUiPage implements OnInit {

  pages = [
    {
      namePage: 'ui-avatar',
      router: '/kikstart-ui/ui-avatar',
    },
    {
      namePage: 'ui-brand',
      router: '/kikstart-ui/ui-brand',
    },
    {
      namePage: 'Uber',
      router: '/clones-ui/uber',
    },
    {
      namePage: 'Whatsapp',
      router: '/clones-ui/whatsapp',
    },
    {
      namePage: 'Tinder',
      router: '/clones-ui/tinder',
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
