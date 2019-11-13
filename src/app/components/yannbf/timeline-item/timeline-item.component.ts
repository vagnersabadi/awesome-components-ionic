import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input('endIcon') endIcon: string = 'ionic';

  constructor() { }

  ngOnInit() { }

}

@Component({
  selector: 'timeline-item',
  template: '<ng-content></ng-content>'
})
export class TimelineItemComponent {
  constructor() { }
}


@Component({
  selector: 'timeline-time',
  template: '<span>{{ time.subtitle }}</span> <span>{{ time.title }}</span>'
})
export class TimelineTimeComponent {
  @Input('time') time : string;

  constructor() { }
}

