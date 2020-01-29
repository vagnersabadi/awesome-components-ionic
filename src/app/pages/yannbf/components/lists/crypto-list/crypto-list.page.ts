import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.page.html',
  styleUrls: ['./crypto-list.page.scss'],
})
export class CryptoListPage implements OnInit {
  data = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'btc',
      rank: '1',
      price_usd: '13208.8',
      percent_change_1h: '1.54'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'eth',
      rank: '2',
      price_usd: '658.926',
      percent_change_1h: '2.42'
    },
    {
      id: 'bitcoin-cash',
      name: 'Bitcoin Cash',
      symbol: 'bch',
      rank: '3',
      price_usd: '2758.51',
      percent_change_1h: '2.65'
    },
    {
      id: 'ripple',
      name: 'Ripple',
      symbol: 'xrp',
      rank: '4',
      price_usd: '1.01963',
      percent_change_1h: '0.98'
    },
    {
      id: 'litecoin',
      name: 'Litecoin',
      symbol: 'ltc',
      rank: '5',
      price_usd: '263.913',
      percent_change_1h: '2.21'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  precision(n, m) {
    return parseFloat(n).toFixed(m);
  }

  evolution(n) {
    return n > 0
      ? '<span>' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-up"></i></span>'
      : '<span class="red">' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-down"></i></span>';
  }

}
