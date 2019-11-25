import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-move-document',
  templateUrl: './move-document.page.html',
  styleUrls: ['./move-document.page.scss'],
})
export class MoveDocumentPage implements OnInit {

  @Input() thisFolder: any;

  folders = [
    {
      name: 'My Folder 1',
    }, {
      name: 'My Folder 2'
    }, {
      name: 'My Folder 3'
    }, {
      name: 'My Folder 4'
    }
  ];



  constructor(
    public modalCtrl: ModalController,
  ) {
  }

  ngOnInit() {
    console.log(this.thisFolder);
    if (!this.thisFolder) {
      this.thisFolder = { name: 'Documents' };
    }
  }

  async goToFolder(folder) {
    const modal = await this.modalCtrl.create({
      component: MoveDocumentPage,
      componentProps: {
        thisFolder: folder,
      }
    });
    await modal.present();
    
  }

  moveHere(folder) {
    this.modalCtrl.dismiss({ thisFolder: folder });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
