import { Component, OnInit, Input } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-nav',
  templateUrl: './modal-nav.page.html',
  styleUrls: ['./modal-nav.page.scss'],
})
export class ModalNavPage implements OnInit {
  @Input() modalPage: any;
  modalParams: any = {};

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  dismissModal(data) {
    this.modalCtrl.dismiss({ name: data });
  }

}
