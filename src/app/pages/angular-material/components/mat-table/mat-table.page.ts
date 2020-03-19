import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.page.html',
  styleUrls: ['./mat-table.page.scss'],
})
export class MatTablePage implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'twitter'];
  dataSource = new MatTableDataSource<any>([
    {
      first_name: 'Max',
      last_name: 'Lynch',
      twitter: 'maxlynch'
    },
    {
      first_name: 'Matt',
      last_name: 'Netkow',
      twitter: 'dotNetkow'
    },
    {
      first_name: 'Ben',
      last_name: 'Sperry',
      twitter: 'benjsperry'
    }
  ]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
