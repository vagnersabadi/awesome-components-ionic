import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WalkthroughModalPage } from './walkthrough-modal/walkthrough-modal.page';
import { SignupModalPage } from './signup-modal/signup-modal.page';
import { HintModalPage } from './hint-modal/hint-modal.page';

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
    this.openModal(HintModalPage, ['inset-modal']);
  }

  openWalkthroughModal() {
    this.openModal(WalkthroughModalPage, ['inset-modal', 'radius-modal']);
  }

  openSignupModal() {
    this.openModal(SignupModalPage, ['inset-modal']);
  }

  async openModal(pageName, css: string[]) {
    const modal = await this.modalCtrl.create({
      component: pageName,
      cssClass: css // Global.scss
    });
    await modal.present();
  }



}
