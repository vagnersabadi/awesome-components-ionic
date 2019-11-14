import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-component-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent implements OnInit {

  @Input('headerColor') headerColor: string = '#F53D3D';
  @Input('textColor') textColor: string = '#FFF';
  @Input('contentColor') contentColor: string = '#F9F9F9';
  @Input('title') title: string;
  @Input('hasMargin') hasMargin: boolean = true;
  @Input('expanded') expanded: boolean;

  @ViewChild('accordionContent', { static: true }) elementView: ElementRef;


  constructor(public renderer: Renderer2, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (!this.expanded) {
      this.renderer.setStyle(this.elementView.nativeElement, 'height', 0 + 'px');
    }
  }

  toggleAccordion() {
    this.expanded = !this.expanded;
    const newHeight = this.expanded ? '100%' : '0px';
    console.log(newHeight);
    this.renderer.setStyle(this.elementView.nativeElement, 'height', newHeight);
  }

  getDynamicColor(color: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`--myvar:` + color)
  }

}
