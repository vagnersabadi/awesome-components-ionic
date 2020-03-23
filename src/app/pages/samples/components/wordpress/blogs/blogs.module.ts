import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BlogsPage } from './blogs.page';
import { BlogpagePageModule } from './blogpage/blogpage.module';

const routes: Routes = [
  {
    path: '',
    component: BlogsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    BlogpagePageModule
  ],
  declarations: [BlogsPage]
})
export class BlogsPageModule { }
