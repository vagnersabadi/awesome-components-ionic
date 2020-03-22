import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.page.html',
  styleUrls: ['./samples.page.scss'],
})
export class SamplesPage implements OnInit {
  
  pages = [
    {
      namePage: 'Walkthrough',
      router: '/samples/walkthrough',
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
