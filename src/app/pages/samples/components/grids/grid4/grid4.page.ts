import { GridServiceService } from './../../../../../services/grid/grid-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid4',
  templateUrl: './grid4.page.html',
  styleUrls: ['./grid4.page.scss'],
})
export class Grid4Page implements OnInit {

  public lists: Array<any>;
  showToolbar: boolean;
  shownGroup = null;

  constructor(public gridServ: GridServiceService) {
    this.lists = this.gridServ.accordianLists;
  }

  ngOnInit() {
    this.toggleGroup(0)
  }
  ionViewWillEnter() {
    this.showToolbar = true;
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = true;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

}
