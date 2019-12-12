import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-background-video',
  templateUrl: './login-background-video.page.html',
  styleUrls: ['./login-background-video.page.scss'],
})
export class LoginBackgroundVideoPage implements OnInit {

  @ViewChild('player', { static: true }) player;

  constructor() { }

  ngOnInit() {
  }

  // It's interesting to remove the src and put it back
  // when entering and leaving the page so there are no memory leaks.
  ionViewWillLeave() {
    // the .nativeElement property of the ViewChild is the reference to the tag <video>
    this.player.nativeElement.src = '';
    this.player.nativeElement.load();
  }

  ionViewWillEnter() {
    this.player.nativeElement.src = 'assets/yannbf/video/background-480.mp4';
    this.player.nativeElement.load();
  }

  ionViewDidLoad() {
    console.log('Hello LoginBackgroundVideo Page');
  }

  goToSignup() {
    console.log('Signup clicked');
  }

  goToLogin() {
    console.log('Login clicked');
  }

}
