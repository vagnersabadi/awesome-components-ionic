import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';



@Component({
  selector: 'app-tinder-cards',
  templateUrl: './tinder-cards.page.html',
  styleUrls: ['./tinder-cards.page.scss'],
})
export class TinderCardsPage implements OnInit {
  @ViewChild('myswing1', { static: true }) swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;


  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';


  constructor(public http: HttpClient, public toastCtrl: ToastController) {

    this.stackConfig = {
      throwOutConfidence: (offset, element: any) => {
        return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ngOnInit() {

  }


}