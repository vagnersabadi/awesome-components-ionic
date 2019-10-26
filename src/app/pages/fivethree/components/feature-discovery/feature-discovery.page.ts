import { Component, OnInit, ViewChild } from '@angular/core';
import { FivFeature } from '@fivethree/core';

@Component({
  selector: 'app-feature-discovery',
  templateUrl: './feature-discovery.page.html',
  styleUrls: ['./feature-discovery.page.scss'],
})
export class FeatureDiscoveryPage implements OnInit {
  @ViewChild('feature', { static: true }) feature: FivFeature;
  fp = 20;
  co = 20;

  constructor() { }

  ngOnInit() { }

  async log(s: string) { }

  navigateBack() {
  }

}
