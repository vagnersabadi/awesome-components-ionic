import { ModalController } from '@ionic/angular';
/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/


import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-classic',
  templateUrl: './classic.page.html',
  styleUrls: ['./classic.page.scss'],
})
export class ClassicPage implements OnInit {

  @ViewChild('IonContent', { static: true }) content: IonContent
  paramData: any;
  msgList: any;
  userName: any;
  user_input: string = '';
  User: string = 'Me';
  toUser: string = 'HealthBot';
  start_typing: any;
  loader: boolean;
  footerJson: {}[];
  show: boolean = false;
  constructor(public activRoute: ActivatedRoute, public modal: ModalController) {
    this.show = false;
    this.activRoute.params.subscribe((params) => {
      this.paramData = params
      this.userName = params.name
    });
    this.msgList = [
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../../../assets/clones/chat/chat/chat3.jpg',
        time: '12:00',
        message: 'Hello, have you seen this great chat UI',
        id: 0
      },
      {
        userId: 'Me',
        userName: 'Me',
        userAvatar: this.paramData.image ? this.paramData.image : '../../../../assets/clones/chat/chat/chat5.jpg',
        time: '12:03',
        message: 'Yeah, I see this. This looks great. ',
        id: 1,
      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../../../assets/clones/chat/chat/chat3.jpg',
        time: '12:05',
        message: '... and this is absolutely free, anyone can use',
        id: 3
      },
      {
        userId: 'Me',
        userName: 'Me',
        userAvatar: '../../../../assets/clones/chat/chat/chat5.jpg',
        time: '12:06',
        message: 'wow ! that\'s great. Love to see more of such chat themes',
        id: 4
      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../../../assets/clones/chat/chat/chat3.jpg',
        message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
        id: 5
      }
    ];
    this.footerJson = [{
      'icon': 'images',
      'label': 'Image'
    }, {
      'icon': 'call',
      'label': 'Phone'
    }, {
      'icon': 'mail-unread',
      'label': 'Red'
    }, {
      'label': 'Document',
      'icon': 'radio-button-on'
    }, {
      'icon': 'pin',
      'label': 'Position'
    }, {
      'icon': 'videocam',
      'label': 'Video'
    },]
  }

  ngOnInit() {
  }

  typeSelected(type: any) {
    console.log(type);
    if (this.user_input === '' && type.icon === 'images') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        image: '../../../../assets/clones/chat/chat/chat3.jpg',
        id: this.msgList.length + 1
      })
      this.user_input = '';
      this.show = false
      this.scrollDown()
      setTimeout(() => {
        this.senderSends()
      }, 500);
    } else if (this.user_input === '' && type.icon === 'videocam') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        video: '../../../../assets/clones/chat/chat/video.mp4',
        id: this.msgList.length + 1
      })
      this.user_input = '';
      this.show = false
      this.scrollDown()
      setTimeout(() => {
        this.senderSends()
      }, 500);
    } else if (this.user_input === '' && type.icon === 'pin') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        map: { lat: 52.678418, lng: 7.809007 },
        id: this.msgList.length + 1
      })
      this.user_input = '';
      this.show = false
      this.scrollDown()
      setTimeout(() => {
        this.senderSends()
      }, 500);
    }
  }

  toggleList() {
    this.show = !this.show
    console.log(this.show);
    this.scrollDown();
  }

  sendMsg() {
    if (this.user_input !== '') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: this.paramData.image ? this.paramData.image : '../../../../assets/clones/chat/chat/chat3.jpg',
        time: '12:01',
        message: this.user_input,
        id: this.msgList.length + 1
      })
      this.user_input = '';
      this.scrollDown()
      setTimeout(() => {
        this.senderSends()
      }, 500);
      this.show = false
    }
  }
  
  senderSends() {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: '../../../../assets/clones/chat/chat/chat5.jpg',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please'
      });
      this.loader = false;
      this.scrollDown()
    }, 2000)
    this.scrollDown()
  }
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50)
    }, 200);
  }

  userTyping(event: any) {
    this.show = false
    console.log(event);
    this.start_typing = event.target.value;
    this.scrollDown()
  }
  focusFunction(event: any) {
    this.show = false
    console.log(event)
  }
  something($event: any) {
    $event.preventDefault()
    console.log($event)
  }

}
