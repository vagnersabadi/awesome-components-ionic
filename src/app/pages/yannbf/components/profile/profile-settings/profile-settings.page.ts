import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
    private camera: Camera
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
    this.camera.getPicture({
      quality: 50,
      allowEdit: true,
      cameraDirection: this.camera.Direction.FRONT,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.user.imageUrl = imageData;
    }, (err) => {
      console.log('Error: ' + err);
    });
  }

  logOut() {
    console.log('Logged out of the application');
  }
}
