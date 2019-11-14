import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  items: Array<{ title: string, page: any }> = [
    {
      title: 'Type one',
      page: '/login-one'
    },
    {
      title: 'Instagram style',
      page: '/login-instagram'
    },
    {
      title: 'Login with slider text',
      page: '/login-slider'
    },
    {
      title: 'Login with video background',
      page: '/login-background-video'
    },
    {
      title: 'Login with slider background',
      page: '/login-background-slider'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
