import { Component, OnInit, ViewChild } from '@angular/core';
import { IonCard } from '@ionic/angular';

@Component({
  selector: 'app-flash-card-component',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
})
export class FlashCardComponent implements OnInit {

  // @ViewChild('fcContainer', { static: true }) fcContainer;
  // @ViewChild('front', { static: true }) fcFront;
  // @ViewChild('back', { static: true }) fcBack;
  public flipped: boolean = false;

  constructor() { }

  public flip() {
    this.flipped = !this.flipped;
  }

  ngOnInit() {
  }

}
