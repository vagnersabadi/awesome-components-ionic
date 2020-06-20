import { Component, OnInit } from '@angular/core';
import { UiBrand } from '@kikstart/ui';

@Component({
  selector: 'app-ui-brand',
  templateUrl: './ui-brand.page.html',
  styleUrls: ['./ui-brand.page.scss'],
})
export class UiBrandPage implements OnInit {
  public brand: UiBrand = {
    name: 'kikstart',
    separator: '|',
    product: 'ui',
    color: '#e83e8c',
    logo: 'assets/clones/chat/avatars/1.png',
  }
  public examples = [
    { name: 'Small (default)', size: 'sm' },
    { name: 'Large', size: 'lg' },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
