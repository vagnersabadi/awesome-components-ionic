import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { HintModalPage } from './hint-modal/hint-modal.page';
import { WalkthroughModalPage } from './walkthrough-modal/walkthrough-modal.page';
// import { SignupModalPage } from './signup-modal/signup-modal.page';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.page.html',
  styleUrls: ['./popup-modal.page.scss'],
})
export class PopupModalPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,

  ) { }

  ngOnInit() {
  }

  openHintModal() {
    // this.openModal(HintModalPage);
  }

  openWalkthroughModal() {
    this.openModal(WalkthroughModalPage);
  }

  openSignupModal() {
    // this.openModal(SignupModalPage);
  }

  async openModal(pageName) {
    // this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
    // .present();

    const modal = await this.modalCtrl.create({
      component: pageName,
      cssClass: 'inset-modal'
    });
    await modal.present();
  }



}
