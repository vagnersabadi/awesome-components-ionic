import { Component, OnInit } from '@angular/core';
import { ProfileTwoPage } from './profile-two/profile-two.page';
import { ProfileOnePage } from './profile-one/profile-one.page';
import { ProfileThreePage } from './profile-three/profile-three.page';
import { ProfileFourPage } from './profile-four/profile-four.page';
import { ProfileFivePage } from './profile-five/profile-five.page';
import { ProfileSettingsPage } from './profile-settings/profile-settings.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  items: Array<{ title: string, page: any }> = [
    {
      title: 'Type One',
      page: ProfileOnePage
    },
    {
      title: 'Type Two',
      page: ProfileTwoPage
    },
    {
      title: 'Type Three',
      page: ProfileThreePage
    },
    {
      title: 'Type Four',
      page: ProfileFourPage
    },
    {
      title: 'Type Five',
      page: ProfileFivePage
    },
    {
      title: 'Profile Settings',
      page: ProfileSettingsPage
    },
  ];

  constructor(
    public modalCtrl: ModalController,

  ) { }

  ngOnInit() {
  }

  async itemTapped(event, item) {
    const modal = await this.modalCtrl.create({
      component: item.page,
    });
    await modal.present();
  }

}
