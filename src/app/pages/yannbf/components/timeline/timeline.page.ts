import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

  items = [
    {
      title: 'Courgette daikon',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { subtitle: '4/16/2013', title: '21:30' },
      color: '#33FF5E'
    },
    {
      title: 'Courgette daikon',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { subtitle: 'January', title: '29' },
      color: '#FF5733'

    },
    {
      title: 'Courgette daikon',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { title: 'Short Text' },
      color: '#ff4162'

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
