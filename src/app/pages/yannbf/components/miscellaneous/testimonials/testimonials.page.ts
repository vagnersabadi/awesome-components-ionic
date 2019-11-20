import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage implements OnInit {

  testimonials = [
    {
      imageUrl: 'assets/yannbf/img/misc/testimonial-1.jpg',
      quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
      name: 'Sue Shei',
      position: 'Founder'
    },
    {
      imageUrl: 'assets/yannbf/img/misc/testimonial-2.jpg',
      quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
      name: 'Will Barrow',
      position: 'Web Designer'
    },
    {
      imageUrl: 'assets/yannbf/img/misc/testimonial-3.jpg',
      quote: 'The only skills I have the patience to learn are those that have no real application in life.',
      name: 'Indigo Violet',
      position: 'Public Relations'
    },
    {
      imageUrl: 'assets/yannbf/img/misc/testimonial-1.jpg',
      quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
      name: 'Sue Shei',
      position: 'Founder'
    },
    {
      imageUrl: 'assets/yannbf/img/misc/testimonial-2.jpg',
      quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
      name: 'Will Barrow',
      position: 'Web Designer'
    },
    {
      imageUrl: 'assets/yannbf/img/misc/testimonial-3.jpg',
      quote: 'The only skills I have the patience to learn are those that have no real application in life.',
      name: 'Indigo Violet',
      position: 'Public Relations'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
