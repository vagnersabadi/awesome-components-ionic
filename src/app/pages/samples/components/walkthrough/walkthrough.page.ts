import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage implements OnInit {

  slideOpts = {
    effect: 'flip',
  };

  constructor(private route: Router) { }

  ngOnInit() {
  }


  sliderChanges(event) { }

  skip() {
    console.log('skip slides');
    this.route.navigate(['samples']);
  }

}
