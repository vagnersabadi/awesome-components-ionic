import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup-menu-one',
  templateUrl: './popup-menu-one.page.html',
  styleUrls: ['./popup-menu-one.page.scss'],
})
export class PopupMenuOnePage implements OnInit {
  openMenu = false;

  constructor(
    public modalCtrl: ModalController,
    
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss()
  }

  
  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  goToAccount() {
    alert('Account clicked.');
    this.togglePopupMenu();
  }

  goToHome() {
    alert('Home clicked.');
    this.togglePopupMenu();
  }

  goToCups() {
    alert('Cups clicked.');
    this.togglePopupMenu();
  }

  goToLeaderboard() {
    alert('Leaderboard clicked.');
    this.togglePopupMenu();
  }

  goToHelp() {
    alert('Help clicked.');
    this.togglePopupMenu();
  }

  goToShop() {
    alert('Shop clicked.');
    this.togglePopupMenu();
  }

}
