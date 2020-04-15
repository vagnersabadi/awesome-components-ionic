import { GridServiceService } from './../../../../../services/grid/grid-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid5',
  templateUrl: './grid5.page.html',
  styleUrls: ['./grid5.page.scss'],
})
export class Grid5Page implements OnInit {

  public buzz;
  public buzz1
  constructor(public gridServ: GridServiceService) {
    this.buzz = this.gridServ.buzz;
    this.buzz1 = this.gridServ.buzz1
  }

  ngOnInit() {
  }

}
