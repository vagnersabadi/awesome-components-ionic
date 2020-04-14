import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ClassicPage } from './classic/classic.page';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.page.html',
  styleUrls: ['./whatsapp.page.scss'],
})
export class WhatsappPage implements OnInit {

  segmentTab: any = 'Chats';
  chatData: any
  click: any;
  title: boolean;
  constructor(
    public modalCtrl: ModalController
  ) {
    this.title = true
    this.chatData = [{
      'name': 'Jovenica Alba',
      'image': '../../../../assets/clones/chat/chat/chat1.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '2',
      'time': '12:17',
      'call': '(3) January 09/27/2019',
      'video': 'videocam'
    }, {
      'name': 'Oliver',
      'image': ' ../../../../assets/clones/chat/chat/chat2.jpg',
      'description': 'Rahim: thanks!',
      'time': '12:17',
      'call': '(3) January 09/26/2019',
      'video': 'videocam'
    }, {
      'name': 'George',
      'image': ' ../../../../assets/clones/chat/chat/chat3.jpg',
      'description': 'Kajor P: share your contact please!',
      'count': '2',
      'time': 'Yesterday',
      'call': '(1) January 09/26/2018',
      'video': 'videocam'
    }, {
      'name': 'Harry',
      'image': ' ../../../../assets/clones/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Sunday',
      'call': '(5) February 08/20/2018',
      'video': 'videocam'
    }, {
      'name': 'Jack',
      'image': ' ../../../../assets/clones/chat/chat/chat5.jpg',
      'description': 'Yes! that\'s right call him right now.',
      'past': '09/27/2015',
      'call': '(4) February 28/20/2018',
      'phone': 'call'
    }, {
      'name': 'Jacob',
      'image': ' ../../../../assets/clones/chat/chat/chat6.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '1',
      'past': '09/27/2015',
      'call': '(4) February 28/20/2015',
      'phone': 'call'
    }, {
      'name': 'Noah',
      'image': ' ../../../../assets/clones/chat/chat/chat7.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'past': '09/27/2015',
      'call': '(3) February 28/20/2016',
      'phone': 'call'
    }, {
      'name': 'Charlie',
      'image': ' ../../../../assets/clones/chat/chat/chat8.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '6',
      'past': '09/27/2015',
      'call': '(3) December 28/20/2017',
      'phone': 'call'
    }, {
      'name': 'Logan',
      'image': ' ../../../../assets/clones/chat/chat/chat1.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'past': '09/27/2015',
      'call': '09/27/2015',
      'phone': 'call'
    }, {
      'name': 'Harrison',
      'image': ' ../../../../assets/clones/chat/chat/chat2.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      'past': '09/27/2015',
      'call': '09/27/2015',
      'video': 'videocam'
    }, {
      'name': 'Sebastian',
      'image': ' ../../../../assets/clones/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      'past': '09/17/2016',
      'call': '(3) December 28/20/2017',
      'video': 'videocam'
    }, {
      'name': 'Zachary',
      'image': ' ../../../../assets/clones/chat/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'past': '09/07/2017',
      'call': '09/27/2015',
      'video': 'videocam'
    }, {
      'name': 'Elijah',
      'image': ' ../../../../assets/clones/chat/chat/chat5.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'past': '09/09/2018',
      'call': '09/27/2015',
      'phone': 'call'
    }
    ];
  }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
  }
  async goforChat(chat) {

    this.title = true

    const modal = await this.modalCtrl.create({
      component: ClassicPage,
    });
    await modal.present();

  }
  toggleSearchTitl() {
    this.title = !this.title
  }

}
