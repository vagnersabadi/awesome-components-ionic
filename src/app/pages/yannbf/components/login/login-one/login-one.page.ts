import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.page.html',
  styleUrls: ['./login-one.page.scss'],
})
export class LoginOnePage implements OnInit {

  public loginForm: any;
  public backgroundImage = 'assets/yannbf/img/background/background-5.jpg';

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) { }

  ngOnInit() { }


  async login() {
    const loading = await this.loadingCtrl.create({
      duration: 500,
      message: 'Please wait...',
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

  goToSignup() { }

  goToResetPassword() { }

}
