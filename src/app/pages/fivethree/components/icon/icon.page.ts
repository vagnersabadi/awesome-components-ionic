import { Component, OnInit } from '@angular/core';
import { icons, Icon } from '../services/icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
})
export class IconPage implements OnInit {

  icon = 'md-notifications';
  indicatorValue = 0;
  off = false;
  dot = false;

  constructor() {}

  ngOnInit() {}

  decrement() {
    if (this.indicatorValue > 0) {
      this.indicatorValue--;
    }
  }
  increment() {
    this.indicatorValue++;
  }

  getNewIcon() {
    const icon = this.getRandomIcon();
    this.icon = icon.icons[1] || icon.icons[0];
  }

  getRandomIcon(): Icon {
    return icons.icons[Math.floor(Math.random() * icons.icons.length)];
  }

}
