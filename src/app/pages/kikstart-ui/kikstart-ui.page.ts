import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kikstart-ui',
  templateUrl: './kikstart-ui.page.html',
  styleUrls: ['./kikstart-ui.page.scss'],
})
export class KikstartUiPage implements OnInit {

  pages = [
    {
      namePage: 'UI-Avatar',
      router: '/kikstart-ui/ui-avatar',
    },
    {
      namePage: 'UI-Brand',
      router: '/kikstart-ui/ui-brand',
    },
    {
      namePage: 'UI-Button',
      router: '/kikstart-ui/ui-button',
    },
    {
      namePage: 'Whatsapp',
      router: '/kikstart-ui/whatsapp',
    },
    {
      namePage: 'Tinder',
      router: '/ckikstart-ui/tinder',
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
