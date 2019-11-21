import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { SwingStackComponent, SwingCardComponent, StackConfig } from 'angular2-swing';

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

    // Either subscribe in controller or set in HTML
    // this.swingStack.throwin.subscribe((event: DragEvent) => {
    //   // event.target.style.background = '#ffffff';
    // });

    this.cards = [{ email: '' }];
    this.addNewCards(1);
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x > 0) {
      color = '#' + hexCode + 'FF' + hexCode;
    } else {
      color = '#FF' + hexCode + hexCode;
    }

    element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  // Connected through HTML
  voteUp(like: boolean) {
    const removedCard = this.cards.pop();
    this.addNewCards(1);
    if (like) {
      this.create('You liked: ' + removedCard.email);
    } else {
      this.create('You disliked: ' + removedCard.email);
    }
  }

  // Add new cards to our array
  addNewCards(count: number) {
    this.http.get('https://randomuser.me/api/?results=' + count)
      // .map(data => data.json().results)
      .subscribe(result => {
        console.log(result);

        // for (const val of result) {
        //   this.cards.push(val);
        // }
      });
  }

  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof (padding) === 'undefined' || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = '0' + hex;
    }

    return hex;
  }

  async create(message, ok = false, duration = 2000) {
    const toast = await this.toastCtrl.create({
      message,
      duration: ok ? null : duration,
      position: 'bottom',
      showCloseButton: ok,
      closeButtonText: 'OK'
    });
    toast.present();
  }

}
