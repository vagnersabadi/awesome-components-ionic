import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-island',
  templateUrl: './dynamic-island.page.html',
  styleUrls: ['./dynamic-island.page.scss'],
})
export class DynamicIslandPage implements OnInit {
  
  
  dynamicIslandState: number | 1 | 2 | 3 | 4 = 1;

  constructor() { }

  ngOnInit() {
  }

  expanded() {

    if (this.dynamicIslandState === 1) {
      this.dynamicIslandState = 2;
    } else if (this.dynamicIslandState === 2) {
      this.dynamicIslandState = 3;
    } else if (this.dynamicIslandState === 3) {
      this.dynamicIslandState = 4;
      setTimeout(() => this.dynamicIslandState = 1, 500);
    }

  }
}
