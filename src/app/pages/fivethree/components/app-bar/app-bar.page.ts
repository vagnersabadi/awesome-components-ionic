import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FivFeature } from '@fivethree/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.page.html',
  styleUrls: ['./app-bar.page.scss'],
})
export class AppBarPage implements OnInit {

  titleMode = 'hide';
  position = 'center';

  constructor() {}

  ngOnInit() {}

}
