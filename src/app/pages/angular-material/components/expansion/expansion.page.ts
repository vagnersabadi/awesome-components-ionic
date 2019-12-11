import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.page.html',
  styleUrls: ['./expansion.page.scss'],
})
export class ExpansionPage implements OnInit {
  panelOpenState: boolean;
  constructor() { }

  ngOnInit() {
  }

}
