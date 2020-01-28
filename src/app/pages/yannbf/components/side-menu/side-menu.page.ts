import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  MENU = {
    DEFAULT: 'menu-principal',
    MATERIAL: 'menu-material',
    AVATAR: 'menu-avatar',
    RIGHT: 'menu-right',
  };

  constructor(public menuCtrl: MenuController) { }


  // Only enables right side menu for this page. Testing purposes.
  ngOnInit() {
    this.menuCtrl.enable(false, 'menu-right');
  }

  changeMenu(menu) {

    console.log(menu);
    
    // Disables all other sidemenus
    Object.keys(this.MENU).map(k => this.menuCtrl.enable(false, this.MENU[k]));

    // Enables then open the selected menu
    this.menuCtrl.enable(true, menu);
    this.menuCtrl.open(menu);
  }

  changeMenuRight() {
    this.menuCtrl.enable(true, 'menu-right');
    this.menuCtrl.open('menu-right');
  }
}
