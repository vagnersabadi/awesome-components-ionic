import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-page-card-badge',
  templateUrl: './card-badge.html',
  styleUrls: ['./card-badge.scss'],

})
export class CardBadgePage {
  cards = [
    {
      imageUrl: 'assets/yannbf/img/card/bjork-live.jpg',
      title: 'Björk',
      description: 'Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes.',
      albums: 9,
      followers: '260k'
    },
    {
      imageUrl: 'assets/yannbf/img/card/badu-live.png',
      title: 'Erykah Badu',
      description: 'American singer-songwriter, record producer, activist, and actress, Badu\'s style is a prime example of neo-soul.',
      albums: 4,
      followers: '120k'
    },
    {
      imageUrl: 'assets/yannbf/img/card/queen-live.png',
      title: 'Queen',
      description: 'The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.',
      albums: 38,
      followers: '30mi'
    },
    {
      imageUrl: 'assets/yannbf/img/card/rundmc-live.png',
      title: 'Run-D.M.C.',
      description: 'The American hip hop group widely acknowledged as one of the most influential acts in the history of hip hop.',
      albums: 8,
      followers: '80k'
    },];

  constructor(private modaCtrl: ModalController) {

  }

  cardTapped(card) {
    alert(card.title + ' was tapped.');
  }

  followersTapped(card) {
    alert(card.title + ' followers tapped.');
  }

  albumsTapped(card) {
    alert(card.title + ' albums tapped.');
  }

  dismiss() {
    this.modaCtrl.dismiss();
  }
}
