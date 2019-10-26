import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  picsum: string[] = Array.from(
    new Array(10),
    (x, i) => `https://picsum.photos/500/?${i}`
  );
  picsumAsync: Observable<string[]> = of(
    Array.from(new Array(10), (x, i) => `https://picsum.photos/500/?${i + 10}`)
  );
  
  constructor() { }

  ngOnInit() {
  }

}
