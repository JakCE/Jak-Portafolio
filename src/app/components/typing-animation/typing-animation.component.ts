import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-animation',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './typing-animation.component.html',
  styleUrl: './typing-animation.component.css'
})
export class TypingAnimationComponent implements OnInit{
  phrases: string[] = ["Computer Science Student 🎓", "Web Developer 🌐", "Full-Stack Developer 💻", "Passionate Coder 🔥", "Tech Enthusiast 🚀"];
  currentPhrase: string = '';
  currentIndex: number = 0;
  isDeleting: boolean = false;
  cursorVisible: boolean = true;
  speed: number = 200; // Speed of typing
  deleteSpeed: number = 100; // Speed of deleting
  cursorBlinkSpeed: number = 500; // Speed of cursor blinking

  ngOnInit() {
    this.startTyping();
    setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, this.cursorBlinkSpeed);
  }

  startTyping() {
    const currentPhrase = this.phrases[this.currentIndex];
    if (this.isDeleting) {
      this.currentPhrase = currentPhrase.substring(0, this.currentPhrase.length - 1);
      if (this.currentPhrase.length === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
        setTimeout(() => this.startTyping(), this.speed * 2);
      } else {
        setTimeout(() => this.startTyping(), this.deleteSpeed);
      }
    } else {
      this.currentPhrase = currentPhrase.substring(0, this.currentPhrase.length + 1);
      if (this.currentPhrase.length === currentPhrase.length) {
        this.isDeleting = true;
        setTimeout(() => this.startTyping(), this.speed);
      } else {
        setTimeout(() => this.startTyping(), this.speed);
      }
    }
  }  
}
