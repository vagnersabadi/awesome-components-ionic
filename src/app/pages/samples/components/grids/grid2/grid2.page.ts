import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.page.html',
  styleUrls: ['./grid2.page.scss'],
})
export class Grid2Page implements OnInit {
  public gridImages:Array<any>;
  public headerName: any;
  topLevelSagment : string = 'image'
    constructor() {
  
      this.gridImages = [
        { image: 'assets/samples/products/gallery1.jpg' },
        { image: 'assets/samples/products/gallery2.jpg' },
        { image: 'assets/samples/products/gallery3.jpg' },
        { image: 'assets/samples/products/gallery8.jpg' },
        { image: 'assets/samples/products/gallery5.jpg' },
        { image: 'assets/samples/products/gallery1.jpg' },
        { image: 'assets/samples/products/gallery7.jpg' },
        { image: 'assets/samples/products/gallery8.jpg' },
        { image: 'assets/samples/products/gallery1.jpg' },
        { image: 'assets/samples/products/gallery2.jpg' },
        { image: 'assets/samples/products/gallery3.jpg' },
        { image: 'assets/samples/products/gallery8.jpg' },
        { image: 'assets/samples/products/gallery5.jpg' },
        { image: 'assets/samples/products/gallery1.jpg' }
      ]
     }
  
    ngOnInit() {
    }
  
    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
      this.headerName=ev.detail.value
      console.log(this.headerName+'here');
      this.topLevelSagment = this.headerName;
      console.log('topLevelSagment '+this.topLevelSagment);
    }

}
