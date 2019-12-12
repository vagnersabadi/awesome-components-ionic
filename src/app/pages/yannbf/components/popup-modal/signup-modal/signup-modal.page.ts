import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.page.html',
  styleUrls: ['./signup-modal.page.scss'],
})
export class SignupModalPage implements OnInit {


  slides = [
    {
      id: 1,
      imageUrl: 'assets/yannbf/img/slides/square.png',
    },
    {
      id: 2,
      imageUrl: 'assets/yannbf/img/slides/square-2.jpg',
    },
    {
      id: 3,
      imageUrl: 'assets/yannbf/img/slides/square-3.jpg',
    },
  ];

  slideOpts = {
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    effect: 'fade'
  };

  constructor(
    private modaCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  signup() {
    this.modaCtrl.dismiss();
  }

  login() {
    this.modaCtrl.dismiss();
  }

  dismiss() {
    this.modaCtrl.dismiss();
  }

}
