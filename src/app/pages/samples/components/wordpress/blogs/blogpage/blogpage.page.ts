import { ModalController } from '@ionic/angular';
import { WordpressService } from 'src/app/services/wordpress/wordpress.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.page.html',
  styleUrls: ['./blogpage.page.scss'],
})
export class BlogpagePage implements OnInit {
  blogDetail = null;
  image_url = null;
  @Input() id: any;

  constructor(private activatedRoute: ActivatedRoute,
    private wp_service: WordpressService,
    private modaCtrl: ModalController
  ) { }

  ngOnInit() {

    this.wp_service.getBlogDetail(this.id).subscribe(result => {
      this.blogDetail = result;
      this.getImage(this.blogDetail);
      this.getTags();
      this.getAuthor();
    });
  }

  getImage(data) {
    this.wp_service.getImage(data.featured_media).subscribe(data => {
      this.blogDetail.imageData = data;
      this.image_url = this.blogDetail.imageData.source_url;
    })
  }

  getTags() {
    this.wp_service.getTags().subscribe((data: Array<any>) => {
      this.blogDetail.tagsData = data.filter(item => {
        return this.blogDetail.tags.includes(item.id)
      });
      console.log(this.blogDetail)
    })
  }

  getAuthor() {
    this.wp_service.getUser(this.blogDetail.author).subscribe(data => {
      console.log(data)
      this.blogDetail.authorData = data;
    })
  }

  dismiss(){
    this.modaCtrl.dismiss();
  }

}
