import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MatInputPage } from './mat-input.page';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
const routes: Routes = [
  {
    path: '',
    component: MatInputPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,    // Form
    MatAutocompleteModule,  // Form
    MatFormFieldModule,     // Form
    MatInputModule,         // Form
    MatDatepickerModule,    // Date Picker
  ],
  declarations: [MatInputPage]
})
export class MatInputPageModule {}
