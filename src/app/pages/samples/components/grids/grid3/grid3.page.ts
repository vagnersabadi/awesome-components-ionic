import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.page.html',
  styleUrls: ['./grid3.page.scss'],
})
export class Grid3Page implements OnInit {

  gridImages = [
    { title: 'V I N Y A S A', image: 'assets/samples/products/vinyasa.jpg' },
    { title: 'A S H T A N G A', image: 'assets/samples/products/ashtanga.jpg' },
    { title: 'I Y E N G A R', image: 'assets/samples/products/gallery7.jpg' },
    { title: 'B I K R A M', image: 'assets/samples/products/bikram.jpg' },
    { title: 'J I V A M U K T I', image: 'assets/samples/products/jivamukti.jpg' },
    { title: 'P O W E R', image: 'assets/samples/products/power.jpg' },
    { title: 'S I V A N A N D A', image: 'assets/samples/products/sivananda.jpg' },
    { title: 'Y I N', image: 'assets/samples/products/yin.jpg' },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
