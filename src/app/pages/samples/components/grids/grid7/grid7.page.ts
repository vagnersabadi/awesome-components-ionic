import { GridServiceService } from './../../../../../services/grid/grid-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid7',
  templateUrl: './grid7.page.html',
  styleUrls: ['./grid7.page.scss'],
})
export class Grid7Page implements OnInit {

  public medicalList:Array<any>;

  constructor(
    public gridServ:GridServiceService
    ) { 
    this.medicalList = this.gridServ.medicalList
  }

  ngOnInit() {
  }

  favorites(index){
    this.medicalList[index].checked = !this.medicalList[index].checked;
  }

}
