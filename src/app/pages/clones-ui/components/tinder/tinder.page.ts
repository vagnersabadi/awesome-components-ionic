import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, NgZone } from '@angular/core';
import { GestureController, IonCard, Platform, } from '@ionic/angular';

@Component({
  selector: 'app-tinder',
  templateUrl: './tinder.page.html',
  styleUrls: ['./tinder.page.scss'],
})
export class TinderPage implements AfterViewInit {

  peoaple = [
    {
      name: 'Marsy',
      img: 'assets/clones/chat/avatars/1.png',
      power: 0
    },
    {
      name: 'Anys',
      img: 'assets/clones/chat/avatars/2.png',
      power: 0
    },
    {
      name: 'Max',
      img: 'assets/clones/chat/avatars/4.png',
      power: 0
    },
    {
      name: 'Geneva',
      img: 'assets/clones/chat/avatars/5.png',
      power: 0
    },
  ];

  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;
  longPressActive = false;

  constructor(
    private gestureCtrl: GestureController,
    private zone: NgZone,
    private plt: Platform
  ) { }

  ngAfterViewInit() {

    const cardArray = this.cards.toArray();

    // this.useLongPress(cardArray);
    this.userTinderSwipe(cardArray);

  }


  /**
   * Use long Press card
   * Obs: Desable userTinderSwipe()
   */
  useLongPress(cardArray: any[]) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'long-press',
        onStart: ev => {
          this.longPressActive = true;
          this.increasePower(i);
        },
        onEnd: ev => {
          this.longPressActive = false;
        }
      });
      gesture.enable(true);
    }

  }

  /**
   * Incremente Power
   */
  increasePower(i: number) {
    console.log('IncreasePower');
    setTimeout(() => {
      if (this.longPressActive) {
        this.zone.run(() => {
          this.peoaple[i].power++;
          this.increasePower(i);
        });
      }
    }, 200);
  }

  /**
   * Swipe card
   */
  userTinderSwipe(cardArray: any[]) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipe',
        onStart: ev => {

        },
        onMove: ev => {
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
          this.setCardColor(ev.deltaX, card.nativeElement);
        },
        onEnd: ev => {
          card.nativeElement.style.transition = '.5s ease-out';

          if (ev.deltaX > 150) {
            // move out size screen view RIGTH
            card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;

          } else if (ev.deltaX < -150) {
            // move out size screen view LEFT
            card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;

          } else {
            card.nativeElement.style.transform = '';
          }


        }
      });


      gesture.enable(true);

    }
  }

  /**
   * Color Rigth left
   * @param x 
   * @param element 
   */
  setCardColor(x, element) {
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      // red
      color = '#FF' + hexCode + hexCode;
    } else {
      // green
      color = '#' + hexCode + 'FF' + hexCode;
    }

    element.style.background = color;
  }

  /**
   * Colors Hex
   */
  decimalToHex(d, padding) {

    let hex = Number(d).toString(16)
    padding = typeof padding === 'undefined' || padding === null ? (padding = 2) : padding;
    while (hex.length < padding) {
      hex = '0' + hex;
    }
    return hex;

  }

}
