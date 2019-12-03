import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-five',
  templateUrl: './profile-five.page.html',
  styleUrls: ['./profile-five.page.scss'],
})
export class ProfileFivePage implements OnInit {

  constructor(
    public modalCtrl: ModalController,

  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }
}
