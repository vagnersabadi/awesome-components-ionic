import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupMenuOnePage } from './popup-menu-one/popup-menu-one.page';
import { PopupMenuTwoPage } from './popup-menu-two/popup-menu-two.page';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.page.html',
  styleUrls: ['./popup-menu.page.scss'],
})
export class PopupMenuPage implements OnInit {
  rootPage: any;
  items: Array<{ title: string, page: any }> = [
    {
      title: 'Type One',
      page: PopupMenuOnePage
    },
    {
      title: 'Type Two',
      page: PopupMenuTwoPage
    },
  ];

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async  itemTapped(event, item) {
    const modal = await this.modalCtrl.create({
      component: item.page,
    });
    await modal.present();
  }

}
