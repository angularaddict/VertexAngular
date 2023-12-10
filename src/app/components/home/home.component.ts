import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  public totalWords = '';
  public showAllWords = false;

  ngOnInit(): void {
    
    const words = ['Automagically', 'Efficiently'];

    setTimeout(() => {
      this.showAllWords = true;
      this.typeWriterEffect(words, 0, 0);
    }, 1000);
  }

  private typeWriterEffect(
    
    words: string[],
    wordIndex: number,
    charIndex: number
  ): void {
    if (wordIndex >= words.length) {
      wordIndex = 0;
      this.totalWords = ''; 
    }

    const currentWord = words[wordIndex];
    this.totalWords = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex > currentWord.length) {
      charIndex = 0;
      wordIndex++;
      setTimeout(
        () => this.typeWriterEffect(words, wordIndex, charIndex),
        3000
      );
    } else {
      setTimeout(() => this.typeWriterEffect(words, wordIndex, charIndex), 100);
    }
  }

}
