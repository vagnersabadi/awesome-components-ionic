import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.page.html',
  styleUrls: ['./grids.page.scss'],
})
export class GridsPage implements OnInit {

  pages = [
    { name: 'Grid 1 - Shop Grid', router: 'grid1' },
    { name: 'Grid 2 - Image Grid', router: 'grid2' },
    { name: 'Grid 3 - Full Width Images', router: 'grid3' },
    { name: 'Grid 4 - Expandable List', router: 'grid4' },
    { name: 'Grid 5 - Masonry Grid', router: 'grid5' },
    { name: 'Grid 6 - Product Grid X3', router: 'grid6' },
    { name: 'Grid 7 - Product Card Grid X2', router: 'grid7' }
  ]


  constructor() { }

  ngOnInit() {
  }

}
