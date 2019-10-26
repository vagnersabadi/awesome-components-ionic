import { Component, OnInit, ViewChild } from '@angular/core';
import { FivStepper } from '@fivethree/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.page.html',
  styleUrls: ['./stepper.page.scss'],
})
export class StepperPage implements OnInit {
  @ViewChild('stepperV', { static: true }) stepperV: FivStepper;

  constructor() { }

  ngOnInit() {
  }

}
