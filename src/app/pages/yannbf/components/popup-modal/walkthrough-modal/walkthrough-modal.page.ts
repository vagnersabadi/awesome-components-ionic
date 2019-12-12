import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-walkthrough-modal',
  templateUrl: './walkthrough-modal.page.html',
  styleUrls: ['./walkthrough-modal.page.scss'],
})
export class WalkthroughModalPage implements OnInit {

  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/yannbf/img/slides/square.png',
      songs: 2,
    },
    {
      title: 'Really nice game',
      imageUrl: 'assets/yannbf/img/slides/square-2.jpg',
      songs: 4,
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/yannbf/img/slides/square-3.jpg',
      songs: 4,
    },
  ];

  slideOpts = {
    loop: true,
  };

  constructor(
    private modaCtrl: ModalController

  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modaCtrl.dismiss();
  }

}
