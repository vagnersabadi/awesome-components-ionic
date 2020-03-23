import { GridServiceService } from './../../../../../services/grid/grid-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid6',
  templateUrl: './grid6.page.html',
  styleUrls: ['./grid6.page.scss'],
})
export class Grid6Page implements OnInit {
  
  public medicines;
  constructor(public gridServ: GridServiceService) {
    this.medicines = this.gridServ.medicines
  }

  ngOnInit() {
  }

}
