import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardSocialPage } from './card-social/card-social';
import { CardBackgroundPage } from './card-background/card-background';
import { CardBadgePage } from './card-badge/card-badge';
import { CardImagePage } from './card-image/card-image';
import { CardMapPage } from './card-map/card-map';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  pages = [
    {
      modal: CardSocialPage,
      name: 'Card Social'
    },

    {
      modal: CardMapPage,
      name: 'Card Map'
    },

    {
      modal: CardImagePage,
      name: 'Card Image'
    },
    {
      modal: CardBadgePage,
      name: 'Card Badge'
    },
    {
      modal: CardBackgroundPage,
      name: 'Card Background'
    }
  ]

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  async presentModal(page) {
    const modal = await this.modalController.create({
      component: page
    });
    return await modal.present();
  }

}
