import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-estate-listing',
  templateUrl: './real-estate-listing.page.html',
  styleUrls: ['./real-estate-listing.page.scss'],
})
export class RealEstateListingPage implements OnInit {


  estateProperty = {
    name: 'Pretty house',
    description: `It’s a 2 bedroom, 2 bathroom laneway house that also has a spacious study off the upstairs landing.
                  Sporting modern finishes and some cute touches like wall niches and bamboo accents,
                  this laneway house is a great example of what can be built on most of Vancouver’s standard 33 x 122
                  foot lots.`,
    price: '850000',
    image: 'https://static.lakana.com/mmm-global-us-east-1/photo/2018/11/16/2019-exterior-home-trends_1542398306940_19450740_ver1.0_1280_720.jpg',
    style: 'Modern Interior',
    size: '33\' Lot',
    features: [
      {
        icon: 'paw',
        title: 'Pet Friendly'
      },
      {
        icon: 'bicycle',
        title: 'Bike Stations'
      },
      {
        icon: 'rose',
        title: 'Beautiful Garden'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
