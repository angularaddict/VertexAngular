import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myButton') myButton!: ElementRef;
  title = 'Adarsh';
  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const button: HTMLElement = this.myButton.nativeElement;
    button.classList.toggle('change', this.isMenuOpen);
  }

  isMenuVisible: boolean = false;

  // Function to toggle the visibility of the mega menu
  toggleServices() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
