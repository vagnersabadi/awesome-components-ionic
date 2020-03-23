import { Injectable } from '@angular/core';

interface GridProduct {
  name: string,
  image: Array<string>,
  size: string,
  color: string,
  cost_price: number,
  discount: number,
  offer: boolean,
  stock: number,
  description: string,
  currency: string,
  bought: number,
  shipping: number,
  rating: number,
  rating_count: number,
  store_rate: number,
  store_rating: number,
  store_rating_count: number,
  sold_by: string,
  specs: string,
  reviews: Array<any>,
  store_reviews: Array<any>,
  sizing: {
    small: number,
    okay: number,
    large: number
  },
  buyer_guarantee: string,
  sponsored: Array<any>
}

@Injectable({
  providedIn: 'root'
})
export class GridServiceService {

  tabs: Array<any> = [
    { title: 'Popular' },
    { title: 'Recently Viewed' },
    { title: 'Fashion' },
    { title: 'Tops' },
    { title: 'Shoes' },
    { title: 'Automotive' },
    { title: 'Bottoms' },
    { title: 'Watches' },
    { title: 'Wallets & Bags' },
    { title: 'Accessories' },
    { title: 'Gadgets' },
    { title: 'Hobbies' },
    { title: 'Phone Upgrades' },
    { title: 'Home Decor' }
  ];
  constructor() { }
  products_1: Array<GridProduct> = [
    { name: 'Bianca Top', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/1.jpg', 'assets/samples/products/1_1.jpg', 'assets/samples/products/1_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/1.jpg', 'assets/samples/products/1_1.jpg'] }, { image: 'assets/samples/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/1.jpg'] }], store_reviews: [{ image: 'assets/samples/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/1.jpg', 'assets/samples/products/1_1.jpg'] }, { image: 'assets/samples/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/1.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Scarpetta Dress', cost_price: 198, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/2.jpg', 'assets/samples/products/2_1.jpg', 'assets/samples/products/2_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 400, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/2.jpg'] }], store_reviews: [{ image: 'assets/samples/products/2_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/2.jpg', 'assets/samples/products/2_1.jpg'] }, { image: 'assets/samples/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/2.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Misty Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/3.jpg', 'assets/samples/products/3_1.jpg', 'assets/samples/products/3_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/3.jpg'] }], store_reviews: [{ image: 'assets/samples/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/3.jpg', 'assets/samples/products/3_1.jpg'] }, { image: 'assets/samples/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/4.jpg', 'assets/samples/products/4_1.jpg', 'assets/samples/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg'] }], store_reviews: [{ image: 'assets/samples/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg', 'assets/samples/products/4_1.jpg'] }, { image: 'assets/samples/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/5.jpg', 'assets/samples/products/5_1.jpg', 'assets/samples/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg'] }], store_reviews: [{ image: 'assets/samples/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg', 'assets/samples/products/5_1.jpg'] }, { image: 'assets/samples/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  ];
  products_2: Array<GridProduct> = [{ name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/6.jpg', 'assets/samples/products/6_1.jpg', 'assets/samples/products/6_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg'] }], store_reviews: [{ image: 'assets/samples/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg', 'assets/samples/products/6_1.jpg'] }, { image: 'assets/samples/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/7.jpg', 'assets/samples/products/7_1.jpg', 'assets/samples/products/7_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg'] }], store_reviews: [{ image: 'assets/samples/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg', 'assets/samples/products/7_1.jpg'] }, { image: 'assets/samples/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Smith Dress', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/8.jpg', 'assets/samples/products/8_1.jpg', 'assets/samples/products/8_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg'] }], store_reviews: [{ image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg', 'assets/samples/products/8_1.jpg'] }, { image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Nicola Dress', cost_price: 278, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/9.jpg', 'assets/samples/products/9_1.jpg', 'assets/samples/products/9_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 982, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/9.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/9.jpg'] }], store_reviews: [{ image: 'assets/samples/products/9_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/9.jpg', 'assets/samples/products/9_1.jpg'] }, { image: 'assets/samples/products/9.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/9.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Smith Dress', cost_price: 98, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/10.jpg', 'assets/samples/products/10_1.jpg', 'assets/samples/products/10_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 214, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/10.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/10.jpg'] }], store_reviews: [{ image: 'assets/samples/products/10_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/10.jpg', 'assets/samples/products/10_1.jpg'] }, { image: 'assets/samples/products/10.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/10.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  ];
  products_3: Array<GridProduct> = [{ name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/4.jpg', 'assets/samples/products/4_1.jpg', 'assets/samples/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg'] }], store_reviews: [{ image: 'assets/samples/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg', 'assets/samples/products/4_1.jpg'] }, { image: 'assets/samples/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/5.jpg', 'assets/samples/products/5_1.jpg', 'assets/samples/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg'] }], store_reviews: [{ image: 'assets/samples/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg', 'assets/samples/products/5_1.jpg'] }, { image: 'assets/samples/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/6.jpg', 'assets/samples/products/6_1.jpg', 'assets/samples/products/6_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg'] }], store_reviews: [{ image: 'assets/samples/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg', 'assets/samples/products/6_1.jpg'] }, { image: 'assets/samples/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/7.jpg', 'assets/samples/products/7_1.jpg', 'assets/samples/products/7_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg'] }], store_reviews: [{ image: 'assets/samples/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg', 'assets/samples/products/7_1.jpg'] }, { image: 'assets/samples/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Smith Dress', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/8.jpg', 'assets/samples/products/8_1.jpg', 'assets/samples/products/8_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg'] }], store_reviews: [{ image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg', 'assets/samples/products/8_1.jpg'] }, { image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  ];
  products_4: Array<GridProduct> = [{ name: 'Misty Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/3.jpg', 'assets/samples/products/3_1.jpg', 'assets/samples/products/3_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/3.jpg'] }], store_reviews: [{ image: 'assets/samples/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/3.jpg', 'assets/samples/products/3_1.jpg'] }, { image: 'assets/samples/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/4.jpg', 'assets/samples/products/4_1.jpg', 'assets/samples/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg'] }], store_reviews: [{ image: 'assets/samples/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg', 'assets/samples/products/4_1.jpg'] }, { image: 'assets/samples/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/5.jpg', 'assets/samples/products/5_1.jpg', 'assets/samples/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg'] }], store_reviews: [{ image: 'assets/samples/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg', 'assets/samples/products/5_1.jpg'] }, { image: 'assets/samples/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/6.jpg', 'assets/samples/products/6_1.jpg', 'assets/samples/products/6_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg'] }], store_reviews: [{ image: 'assets/samples/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg', 'assets/samples/products/6_1.jpg'] }, { image: 'assets/samples/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/7.jpg', 'assets/samples/products/7_1.jpg', 'assets/samples/products/7_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg'] }], store_reviews: [{ image: 'assets/samples/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg', 'assets/samples/products/7_1.jpg'] }, { image: 'assets/samples/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Smith Dress', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/8.jpg', 'assets/samples/products/8_1.jpg', 'assets/samples/products/8_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg'] }], store_reviews: [{ image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg', 'assets/samples/products/8_1.jpg'] }, { image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  ];
  products_5: Array<GridProduct> = [{ name: 'Scarpetta Dress', cost_price: 198, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/2.jpg', 'assets/samples/products/2_1.jpg', 'assets/samples/products/2_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 400, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/2.jpg'] }], store_reviews: [{ image: 'assets/samples/products/2_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/2.jpg', 'assets/samples/products/2_1.jpg'] }, { image: 'assets/samples/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/2.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Misty Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/3.jpg', 'assets/samples/products/3_1.jpg', 'assets/samples/products/3_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/3.jpg'] }], store_reviews: [{ image: 'assets/samples/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/3.jpg', 'assets/samples/products/3_1.jpg'] }, { image: 'assets/samples/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/4.jpg', 'assets/samples/products/4_1.jpg', 'assets/samples/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg'] }], store_reviews: [{ image: 'assets/samples/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg', 'assets/samples/products/4_1.jpg'] }, { image: 'assets/samples/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/5.jpg', 'assets/samples/products/5_1.jpg', 'assets/samples/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg'] }], store_reviews: [{ image: 'assets/samples/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg', 'assets/samples/products/5_1.jpg'] }, { image: 'assets/samples/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/6.jpg', 'assets/samples/products/6_1.jpg', 'assets/samples/products/6_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg'] }], store_reviews: [{ image: 'assets/samples/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg', 'assets/samples/products/6_1.jpg'] }, { image: 'assets/samples/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/samples/products/7.jpg', 'assets/samples/products/7_1.jpg', 'assets/samples/products/7_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg'] }], store_reviews: [{ image: 'assets/samples/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg', 'assets/samples/products/7_1.jpg'] }, { image: 'assets/samples/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Smith Dress', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/samples/products/8.jpg', 'assets/samples/products/8_1.jpg', 'assets/samples/products/8_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg'] }], store_reviews: [{ image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg', 'assets/samples/products/8_1.jpg'] }, { image: 'assets/samples/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/samples/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all samples/products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  ];



  accordianLists = [
    {
      Name: 'Begineer',
      children: [{
        Name: 'BOAT',
        Set: '3',
        image: 'assets/samples/products/giphy2.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'
      },
      {
        Name: 'PLANK',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'BRIDGE VARIATION',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'SUPERMAN',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'HALF MOON',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'WHEEL',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'SIDE ANGLE',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'CROW',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'REVERSE PLANK',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      ]
    },
    {
      Name: 'Modrate',
      children: [{
        Name: 'BOAT',
        Set: '3',
        image: 'assets/samples/products/giphy2.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {
        Name: 'PLANK',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'BRIDGE VARIATION',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'SUPERMAN',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'HALF MOON',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'WHEEL',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'SIDE ANGLE',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'CROW',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'REVERSE PLANK',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      }
      ]
    },
    {
      Name: 'Professional',
      children: [{
        Name: 'BOAT',
        Set: '3',
        image: 'assets/samples/products/giphy2.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {
        Name: 'PLANK',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'BRIDGE VARIATION',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'SUPERMAN',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'HALF MOON',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'WHEEL',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'SIDE ANGLE',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'CROW',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      },
      {

        Name: 'REVERSE PLANK',
        Set: '3',
        image: 'assets/samples/products/giphy1.gif',
        Equipment: 'dumbell',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

      }
      ]
    },
  ];

  buzz = [{ image: 'assets/samples/products/movie6.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'assets/samples/products/robot.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'http://b.static.trunity.net/files/299501_299600/299598/vertical-farming-chris-jacobs.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'assets/samples/products/movie6.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAaop4raKafqQKCdhvvmBS3ZJzmZmvL8Sra94OUV-iRaqdnUo', title: '7 Places to be in Hyderabad This New Year eve' }];
  buzz1 = [{ image: 'http://b.static.trunity.net/files/299501_299600/299598/vertical-farming-chris-jacobs.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'assets/samples/products/events4.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'https:/encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAaop4raKafqQKCdhvvmBS3ZJzmZmvL8Sra94OUV-iRaqdnUo', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'assets/samples/products/more5.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG', title: '7 Places to be in Hyderabad This New Year eve' },
  { image: 'assets/samples/products/plays4.jpg', title: '7 Places to be in Hyderabad This New Year eve' }]

  medicines = [
    { title: 'OTC Medicine', image: 'assets/samples/products/icon2.png' },
    { title: 'Drops', image: 'assets/samples/products/drops320x320.png' },
    { title: 'Personal Care', image: 'assets/samples/products/Bath-Essentials-500x500.png' },
    { title: 'Baby & Mother', image: 'assets/samples/products/babyMother.png' },
    { title: 'Health Atd', image: 'assets/samples/products/First-aid.png' },
    { title: 'Baby & Mother', image: 'assets/samples/products/babyMother.png' },
    { title: 'OTC Medicine', image: 'assets/samples/products/icon2.png' },
    { title: 'Drops', image: 'assets/samples/products/drops320x320.png' },
    { title: 'Personal Care', image: 'assets/samples/products/Bath-Essentials-500x500.png' },
    { title: 'Drops', image: 'assets/samples/products/drops320x320.png' },
    { title: 'Baby & Mother', image: 'assets/samples/products/babyMother.png' },
    { title: 'Health Atd', image: 'assets/samples/products/First-aid.png' },
  ]

  medicalList = [
    { title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/samples/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
    { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/samples/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Ayurvedic Dabur Chyawanprash 1kg', image: 'assets/samples/products/chyawanprash-700x700.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/samples/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/samples/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/samples/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurved isabgol 100mg', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
    { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/samples/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/samples/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/samples/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
  ]

  medicalList_2 = [{
    content:
      [{ title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/samples/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [{ title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/samples/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Ayurvedic Dabur Chyawanprash 1kg', image: 'assets/samples/products/chyawanprash-700x700.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [{ title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/samples/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/samples/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [{ title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/samples/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Baidyanath Ayurved isabgol 100mg', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [{ title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/samples/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [{ title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/samples/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/samples/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  }
  ]

  medicalList_3 = [{
    content:
      [{ title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/samples/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
      { title: 'Ayurvedic Dabur Chyawanprash 1kg', image: 'assets/samples/products/chyawanprash-700x700.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [
        { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/samples/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
        { title: 'Ayurvedic Dabur Chyawanprash 1kg', image: 'assets/samples/products/chyawanprash-700x700.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [{ title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/samples/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/samples/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/samples/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [{ title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/samples/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Baidyanath Ayurved isabgol 100mg', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
      { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/samples/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [
        { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/samples/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/samples/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/samples/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  },
  {
    content:
      [{ title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/samples/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/samples/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/samples/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
      ]
  }
  ];


  calculate(price, discount) {
    price = price - (price * discount / 100);
    return price.toFixed(2);
  }
}
