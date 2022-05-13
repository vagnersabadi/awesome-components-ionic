import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Gesture } from 'src/app/directives/social-gestures/social-gestures.directive';

@Component({
  selector: 'app-touch-swipe',
  templateUrl: './touch-swipe.page.html',
  styleUrls: ['./touch-swipe.page.scss'],
})
export class TouchSwipePage implements OnInit {


  gestureOptsTap: Gesture[] = [
    { name: 'tap' },
    { name: 'doubleTap' },
  ];


  gestureOptsPress: Gesture[] = [
    { name: 'press', interval: 1500 },
  ];


  gestureOptsSwipe: Gesture[] = [
    { name: 'swipe', direction: ['left', 'right'] },
  ];

  direction = null

  constructor(
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  onTap() {
    this.presentToast('Tap');
  }

  onDoubleTap() {
    this.presentToast('DoubleTap');
  }

  onPress() {
    this.presentToast('Long Press 1.5s');
  }

  onSwipe(e) {
    this.direction = e.dirX;
  }

  onMoveed() {
    this.presentToast('Swipe End ' + this.direction);
  }


  async presentToast(msgm: string) {
    const toast = await this.toastController.create({
      message: msgm,
      duration: 500
    });
    toast.present();
  }

}
