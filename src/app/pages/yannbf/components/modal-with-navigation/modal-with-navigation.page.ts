import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, AlertController, NavController } from '@ionic/angular';
import { MoveDocumentPage } from './move-document/move-document.page';
import { ModalNavPage } from './modal-nav/modal-nav.page';

@Component({
  selector: 'app-modal-with-navigation',
  templateUrl: './modal-with-navigation.page.html',
  styleUrls: ['./modal-with-navigation.page.scss'],
})
export class ModalWithNavigationPage implements OnInit {

  documents: any = [{
    name: 'Ionic.sketch',
  }, {
    name: 'Envudu.sketch'
  }, {
    name: 'Fazescardgame.sketch'
  }, {
    name: 'Lucidchart.sketch'
  }];

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    // public toastCtrl: ToastService

  ) { }

  ngOnInit() {
  }
  async  presentActionSheet(document) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: document.name,
      buttons: [
        {
          text: 'Move',
          handler: () => {
            this.moveDocumentModal(document);
            console.log('Move clicked');
          }
        }, {
          text: 'Rename',
          handler: () => {
            const navTransition = actionSheet.dismiss();
            navTransition.then(() => {
              // wait until action sheet dismisses
              this.renameDocument(document);
              console.log('Rename clicked');
            });
            return false;
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async moveDocumentModal(document) {
    const modal = await this.modalCtrl.create({
      component: MoveDocumentPage
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log('"' + document.name + '" moved to folder "' + data.name + '"');
    }
  }

  async renameDocument(document) {
    const prompt = await this.alertCtrl.create({
      header: 'Rename Document',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: document.name
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            document.name = data.title;
            console.log('Saved clicked');
          }
        }
      ]
    });

    await prompt.present();
  }
}
