import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-fab-modal',
  templateUrl: './popup-fab-modal.page.html',
  styleUrls: ['./popup-fab-modal.page.scss'],
})
export class PopupFabModalPage implements OnInit {

  slideOpts = {
    effect: 'flip',
  };
  
  constructor(private modaCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modaCtrl.dismiss();
  }

}
