import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-background-slider',
  templateUrl: './login-background-slider.page.html',
  styleUrls: ['./login-background-slider.page.scss'],
})
export class LoginBackgroundSliderPage implements OnInit {
  
  backgrounds = [
    'assets/yannbf/img/background/background-1.jpg',
    'assets/yannbf/img/background/background-2.jpg',
    'assets/yannbf/img/background/background-3.jpg',
    'assets/yannbf/img/background/background-4.jpg'
  ];
  public loginForm: any;

  slideOpts = {
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    effect: 'fade'
  };

  ngOnInit() {
  }

  constructor(public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('Hello LoginBackgroundSlider Page');
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  doLogin() {
    if (!this.loginForm.valid) {
      console.log('Invalid or empty data');
    } else {
      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;

      console.log('user data', userEmail, userPassword);
    }
  }

}
