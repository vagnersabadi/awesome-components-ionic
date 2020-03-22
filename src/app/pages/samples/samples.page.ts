import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.page.html',
  styleUrls: ['./samples.page.scss'],
})
export class SamplesPage implements OnInit {
  
  pages = [
    {
      namePage: 'Wordpress',
      router: '/samples/blogs',
    },
    {
      namePage: 'Walkthrough',
      router: '/samples/walkthrough',
    },
  
  ];


  constructor() { }

  ngOnInit() {
  }

}
