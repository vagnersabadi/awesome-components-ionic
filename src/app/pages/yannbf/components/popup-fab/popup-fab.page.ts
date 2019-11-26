import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupFabModalPage } from './popup-fab-modal/popup-fab-modal.page';

@Component({
  selector: 'app-popup-fab',
  templateUrl: './popup-fab.page.html',
  styleUrls: ['./popup-fab.page.scss'],
})
export class PopupFabPage implements OnInit {
  expanded: any;
  contracted: any;
  showIcon = true;
  preload = true;

  constructor(
    public modalCtrl: ModalController,

  ) { }

  ngOnInit() {

  }

  async expand() {
    this.expanded = true;
    this.contracted = !this.expanded;
    this.showIcon = false;
    // setTimeout(() => {
    //   const modal = this.modalCtrl.create('PopupFabModalPage');
    //   modal.onDidDismiss(data => {
    //     this.expanded = false;
    //     this.contracted = !this.expanded;
    //     setTimeout(() => this.showIcon = true, 330);
    //   });
    //   modal.present();
    // }, 200);

    setTimeout(async () => {

      const modal = await this.modalCtrl.create({
        component: PopupFabModalPage
      });
      await modal.present();

      const { data } = await modal.onWillDismiss();
      this.expanded = false;
      this.contracted = !this.expanded;
      setTimeout(() => this.showIcon = true, 330);

    }, 200);



  }

}
