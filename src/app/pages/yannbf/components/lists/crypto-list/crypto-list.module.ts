import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoListPageRoutingModule } from './crypto-list-routing.module';

import { CryptoListPage } from './crypto-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoListPageRoutingModule
  ],
  declarations: [CryptoListPage]
})
export class CryptoListPageModule {}
