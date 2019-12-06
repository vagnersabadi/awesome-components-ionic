import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-one',
  templateUrl: './profile-one.page.html',
  styleUrls: ['./profile-one.page.scss'],
})
export class ProfileOnePage implements OnInit {

  posts = [];
  imageUrl: string = 'assets/yannbf/img/profile/profile-cover.jpg';

  constructor(
    public modalCtrl: ModalController,

  ) {
    for (let i = 0; i < 10; i++) {
      this.posts[i] = {
        text: 'Post text ' + i,
        created_at: (i + 1),
      };
    }
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
