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


  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.then(() => {
      const alert = this.alertCtrl.create({
        header: 'Logged in!',
        subHeader: 'Thanks for logging in.',
        buttons: ['Dismiss']
      });

    });
  }

  goToSignup() { }

  goToResetPassword() { }

}
