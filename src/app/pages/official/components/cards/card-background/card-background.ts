import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cards-background',
  templateUrl: './card-background.html',
  styleUrls: ['./card-background.scss'],
})
export class CardBackgroundPage {
  cards = [
    {
      imageUrl: 'assets/yannbf/img/card/card-saopaolo.png',
      title: 'São Paulo',
      subtitle: '41 Listings'
    },
    {
      imageUrl: 'assets/yannbf/img/card/card-amsterdam.png',
      title: 'Amsterdam',
      subtitle: '64 Listings'
    },
    {
      imageUrl: 'assets/yannbf/img/card/card-sf.png',
      title: 'San Francisco',
      subtitle: '72 Listings'
    },
    {
      imageUrl: 'assets/yannbf/img/card/card-madison.png',
      title: 'Madison',
      subtitle: '28 Listings'
    }];

  constructor(private modaCtrl: ModalController) {

  }

  cardTapped(card) {
    alert(card.title + ' was tapped.');
  }

  dismiss() {
    this.modaCtrl.dismiss();
  }

}
