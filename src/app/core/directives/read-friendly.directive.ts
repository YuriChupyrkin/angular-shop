import {
  Directive,
  Input,
  HostListener,
  Renderer2,
  ElementRef,
  OnInit,
} from '@angular/core';

import * as $ from 'jquery';

@Directive({
  selector: '[appReadFriendly]',
})
export class UserFriendlyDirective implements OnInit {
  private defaultFontSize: string;

  @Input('size') fontSize: string;

  constructor(
    private element: ElementRef,
    private render: Renderer2,
  ) { }

  ngOnInit(): void {
    const $element = $(this.element.nativeElement);
    this.defaultFontSize = $element.css('font-size');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.render.setStyle(
      this.element.nativeElement,
      'font-size',
      `${this.fontSize}px`
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.render.setStyle(
      this.element.nativeElement,
      'font-size',
      this.defaultFontSize
    );
  }

  @HostListener('click')
  onClick() {
    const number = Number(this.fontSize);
    if (Number.isNaN(number)) {
      return;
    }

    const biggestSize = number * 1.5;

    this.render.setStyle(
      this.element.nativeElement,
      'font-size',
      `${biggestSize}px`
    );
  }
}
