import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosevertex',
  templateUrl: './choosevertex.component.html',
  styleUrls: ['./choosevertex.component.css'],
})
export class ChoosevertexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // If a user hasn't opted in for reduced motion, add the animation
    if (!window.matchMedia('(prefers-motion: reduce)').matches) {
      this.addAnimation(document.querySelectorAll('.allimages'));
    }
  }
  

  addAnimation(scrollers: NodeListOf<Element>): void {
    scrollers.forEach((scroller) => {
      // Add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute('data-animated', 'true');

      // Clone and add elements within `.scroller-inner` with aria-hidden
      const scrollerInner = scroller.querySelector('.imageall') as HTMLElement;
      Array.from(scrollerInner.children).forEach((item) => {
        const clonedItem = item.cloneNode(true) as HTMLElement;
        scrollerInner.appendChild(clonedItem).setAttribute('aria-hidden', 'true');
      });
    });
  }
}
