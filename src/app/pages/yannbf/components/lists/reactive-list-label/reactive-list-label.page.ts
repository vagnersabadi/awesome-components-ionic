import { IonContent, IonCard } from '@ionic/angular';
import { LIST_DATA, IDataList } from './list-data';
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reactive-list-label',
  templateUrl: './reactive-list-label.page.html',
  styleUrls: ['./reactive-list-label.page.scss'],
})
export class ReactiveListLabelPage implements OnInit {
  public dataList = LIST_DATA;
  public currentCategory: string = this.dataList[0].category;

  constructor(
    private ngZone: NgZone

  ) { }

  ngOnInit() {
  }

  scroll(event){
    console.log(event);
  
    
    // this.itemIsVisible(event)
  }

  public itemIsVisible($event, book?: IDataList) {
    console.log(book, $event);
    // book.visible = $event;
    this.setCategory();
  }

  private setCategory() {
    const obj = {};
    let qtdVisibleCategory = 0;
    let higherCategory = '';
    this.dataList
      .filter(bk => bk.visible)
      .forEach(
        bk => (obj[bk.category] = obj[bk.category] ? obj[bk.category] + 1 : 1)
      );
    for (const key in obj) {
      if (obj[key] > qtdVisibleCategory) {
        qtdVisibleCategory = obj[key];
        higherCategory = key;
      }
    }

    this.ngZone.runOutsideAngular(() => {
      this.ngZone.run(() => {
        this.currentCategory = higherCategory;
      });
    });
  }

}
