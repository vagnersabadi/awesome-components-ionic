import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { MessagesPage } from './messages/messages.page';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chats = [{
    imageUrl: 'assets/yannbf/img/avatar/marty-avatar.png',
    title: 'McFly',
    lastMessage: 'Hey, what happened yesterday?',
    timestamp: new Date()
  },
  {
    imageUrl: 'assets/yannbf/img/avatar/ian-avatar.png',
    title: 'Venkman',
    lastMessage: 'Sup, dude',
    timestamp: new Date()
  }
    ,
  {
    imageUrl: 'assets/yannbf/img/avatar/sarah-avatar.jpg',
    title: 'Sarah Mcconnor',
    lastMessage: 'You still ow me that pizza.',
    timestamp: new Date()
  }];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  //  Open modal messages
  async viewMessages(chat) {
    const modal = await this.modalCtrl.create({
      component: MessagesPage,
      componentProps: {
        chatId: chat.id,
      }
    });
    await modal.present();

  }

}
