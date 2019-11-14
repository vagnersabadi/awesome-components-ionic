import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autosizing-text-area',
  templateUrl: './autosizing-text-area.page.html',
  styleUrls: ['./autosizing-text-area.page.scss'],
})

export class AutosizingTextAreaPage implements OnInit {

  dummyText: string = `Hello I am autosizing textarea.
  I automatically adjusts to accommodate my content.
  I increase and decrease my size based on my content.
  Try by removing few lines or adding few new lines of text to see what I am able to do.`;

  constructor() { }

  ngOnInit() {
  }

}
