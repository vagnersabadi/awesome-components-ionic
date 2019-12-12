import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.page.html',
  styleUrls: ['./miscellaneous.page.scss'],
})
export class MiscellaneousPage implements OnInit {
  items: Array<{ title: string, page: any }> = [
    {
      title: 'Autosizing Textarea',
      page: '/autosizing-text-area'
    },
    {
      title: 'Blog Post',
      page: '/blog-post'
    },
    {
      title: 'Charts',
      page: '/charts'
    },
    {
      title: 'Chat',
      page: '/chat'
    },
    {
      title: 'Concert Card',
      page: '/concert-card'
    },
    {
      title: 'Countdown',
      page: '/countdown'
    },
    {
      title: 'Expandable Header',
      page: '/expandable-header'
    },
    {
      title: 'Flash Card',
      page: '/flash-card'
    },
    {
      title: 'Pinterest Masonry Cards',
      page: '/pinterest-masonry-cards'
    },
    {
      title: 'Real Estate Listing',
      page: '/real-estate-listing'
    },
    {
      title: 'Testimonials',
      page: '/testimonials'
    },
    {
      title: 'Tinder Cards',
      page: '/tinder-cards'
    },
    {
      title: 'Item Ribbon',
      page: '/item-ribbon'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
