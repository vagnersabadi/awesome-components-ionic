import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hint-modal',
  templateUrl: './hint-modal.page.html',
  styleUrls: ['./hint-modal.page.scss'],
})
export class HintModalPage implements OnInit {
  myParam: string;

  constructor(
    private modaCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modaCtrl.dismiss();
  }

}
