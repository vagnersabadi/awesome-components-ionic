import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.page.html',
  styleUrls: ['./mat-input.page.scss'],
})
export class MatInputPage implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  
  constructor() { }

  ngOnInit() {
  }

}
