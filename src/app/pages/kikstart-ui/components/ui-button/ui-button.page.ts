import { Component, OnInit } from '@angular/core';
import { UiButton } from '@kikstart/ui';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.page.html',
  styleUrls: ['./ui-button.page.scss'],
})
export class UiButtonPage implements OnInit {
  public result: any = {
    _: 'Click a button to see some actions!',
  }
  public loading = {}
  public threeIcons = ['fa-refresh', 'fa-chevron-down', 'fa-chevron-up'].map(icon => ({ icon }))
  public examples: { name: string; buttons: UiButton[] }[] = [
    {
      name: 'Simple button',
      buttons: [
        {
          label: 'Save',
          action: 'SAVE',
          className: 'btn-outline-success',
        },
        {
          label: 'Save',
          action: 'DISABLED',
          className: 'btn-outline-success',
          disabled: true,
        },
      ],
    },
    {
      name: 'Button with icon and color',
      buttons: [
        {
          icon: 'fa-trash',
          label: 'Delete',
          action: 'DELETE',
          className: 'btn-outline-danger',
        },
        {
          label: 'Delete',
          iconAfter: 'fa-trash',
          action: 'DELETE',
          className: 'btn-outline-danger',
        },
      ],
    },
    {
      name: 'Button with custom handler',
      buttons: [
        {
          icon: 'fa-refresh',
          className: 'btn-sm btn-outline-info',
          handler: $event => {
            this.result = {
              ...$event,
              inline: ['Handle Button Actions'],
            }
          },
        },
      ],
    },
    {
      name: 'Combine links and buttons',
      buttons: [
        {
          icon: 'fa-home',
          path: '/home',
        },
        {
          icon: 'fa-github',
          url: 'https://github.com/beeman/kikstart-ui',
        },
        {
          icon: 'fa-refresh',
          action: 'REFRESH',
        },
      ],
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  handleAction($event) {
    this.result = {
      time: new Date(),
      event: $event,
    }
  }

}
