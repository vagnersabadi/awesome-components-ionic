import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-two',
  templateUrl: './profile-two.page.html',
  styleUrls: ['./profile-two.page.scss'],
})
export class ProfileTwoPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,

  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
