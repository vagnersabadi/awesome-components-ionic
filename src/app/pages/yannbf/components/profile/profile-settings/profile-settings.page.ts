import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.page.html',
  styleUrls: ['./profile-settings.page.scss'],
})
export class ProfileSettingsPage implements OnInit {
  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = 'http://api.adorable.io/avatar/200/bob';

  enableNotifications = true;
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ['English', 'Portuguese', 'French'];
  paymentMethods = ['Paypal', 'Credit Card'];
  currencies = ['USD', 'BRL', 'EUR'];

  user = {
    name: 'Marty Mcfly',
    imageUrl: 'assets/yannbf/img/avatar/marty-avatar.png'
  };

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  toggleNotifications() {
    if (this.enableNotifications) {
      console.log('Notifications enabled.');
    } else {
      console.log('Notifications disabled.');
    }
  }

  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }

  updateProfileImage() {
    console.log('Update profile image');
  }

  logOut() {
    console.log('Logged out of the application');
  }
}
