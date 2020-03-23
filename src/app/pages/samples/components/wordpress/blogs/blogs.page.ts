import { ModalController } from '@ionic/angular';
import { WordpressService } from './../../../../../services/wordpress/wordpress.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogpagePage } from './blogpage/blogpage.page';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  public blogPosts: Observable<any>;
  constructor(
    private wp_service: WordpressService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // Initiate the API call to fetch all blogs. Show spinner in meantime
    this.getBlogData();
  }

  getBlogData() {
    // Call our service function which returns an Observable
    this.wp_service.getBlogs().subscribe(result => {
      this.blogPosts = result;
      this.getImages();
    });
  }

  getImages() {
    this.wp_service.getMedia().subscribe((data: Array<any>) => {
      this.blogPosts.forEach(element => {
        const media = data.filter(item => {
          return item.id === element.featured_media
        })
        element.imageData = media[0];
      });
      console.log(this.blogPosts)
    })
  }

  async openBlog(id) {

    const modal = await this.modalCtrl.create({
      component: BlogpagePage,
      componentProps: {
        id: id
      }
    });
    return await modal.present();

  }

}
