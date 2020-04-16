import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clones-ui',
  templateUrl: './clones-ui.page.html',
  styleUrls: ['./clones-ui.page.scss'],
})
export class ClonesUiPage implements OnInit {


  pages = [
    {
      namePage: 'Instagram',
      router: '/clones-ui/instagram',
    },
    {
      namePage: 'Netflix',
      router: '/clones-ui/netflix',
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
