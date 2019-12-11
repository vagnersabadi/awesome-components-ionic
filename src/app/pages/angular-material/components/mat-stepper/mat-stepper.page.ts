import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.page.html',
  styleUrls: ['./mat-stepper.page.scss'],
})
export class MatStepperPage implements OnInit {

  userForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

}
