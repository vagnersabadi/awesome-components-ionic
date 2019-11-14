import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-slider',
  templateUrl: './login-slider.page.html',
  styleUrls: ['./login-slider.page.scss'],
})
export class LoginSliderPage implements OnInit {
  // Slider methods
  @ViewChild('slider', { static: true }) slider: IonSlides;
  @ViewChild('innerSlider', { static: true }) innerSlider: IonSlides;

  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-6.jpg';

  slideOpts = {
    slidesPerView: 1,
    initialSlide: 0,
    speed: 400
  };

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) { }

  ngOnInit() { }
  

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  async presentLoading(messages: string) {
    const loading = await this.loadingCtrl.create({
      duration: 500,
      message: messages,
    });
    await loading.present();

    await loading.onDidDismiss()
      .then(async () => {
        const alert = await this.alertCtrl.create({
          header: 'Logged in!',
          subHeader: 'Thanks for logging in.',
          buttons: ['Dismiss']
        });

        await alert.present();
      });
  }

  login() {
    this.presentLoading('Thanks for signing up!');
  }

  signup() {
    this.presentLoading('Thanks for signing up!');
  }

  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }

}
