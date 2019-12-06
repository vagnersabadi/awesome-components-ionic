import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-five',
  templateUrl: './profile-five.page.html',
  styleUrls: ['./profile-five.page.scss'],
})
export class ProfileFivePage implements OnInit {

user = {
    name: 'Cosima Niehaus',
    profileImage: 'assets/yannbf/img/avatar/girl-avatar.png',
    coverImage: 'assets/yannbf/img/background/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
    address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
    phone: '555 555 555',
    email: 'cosima@niehaus.com',
    whatsapp: '555 555 555',
  };

  constructor(
    public modalCtrl: ModalController,

  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }
}
