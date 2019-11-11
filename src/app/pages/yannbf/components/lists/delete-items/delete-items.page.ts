import { Component, OnInit } from '@angular/core';
import { IonItemSliding, IonItem } from '@ionic/angular';

@Component({
  selector: 'app-delete-items',
  templateUrl: './delete-items.page.html',
  styleUrls: ['./delete-items.page.scss'],
})
export class DeleteItemsPage implements OnInit {
  activeItemSliding: IonItemSliding = null;

  items = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ];

  things = [
    { title: 'Thing 1' },
    { title: 'Thing 2' },
    { title: 'Thing 3' },
  ];

  constructor() { }

  ngOnInit() {
  }

  addThing() {
    console.log('add thing');
    this.things.push({ title: 'Thing ' + (this.things.length + 1) });
  }

  addItem() {
    console.log('add item');
    this.items.push({ title: 'Item ' + (this.items.length + 1) });
  }

  deleteItem(list, index) {
    list.splice(index, 1);
  }

  openOption(itemSlide: IonItemSliding, item: IonItem, event) {
    console.log('opening item slide..');
    event.stopPropagation(); // here if you want item to be tappable
    if (this.activeItemSliding) { // use this so that only one active sliding item allowed
      this.closeOption();
    }
    this.activeItemSliding = itemSlide;
    itemSlide.open('end');
  }

  closeOption() {
    console.log('closing item slide..');

    if (this.activeItemSliding) {
      this.activeItemSliding.close();
      this.activeItemSliding = null;
    }
  }

}
