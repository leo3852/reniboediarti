import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit {
  @Output() splashComplete = new EventEmitter<void>();
  
  isFadingOut = false;
  showSplash = true;

  ngOnInit(): void {
    // Start the splash screen sequence
    this.startSplashSequence();
  }

  private startSplashSequence(): void {
    // After 3 seconds, start fade out
    setTimeout(() => {
      this.fadeOut();
    }, 3000);
  }

  private fadeOut(): void {
    this.isFadingOut = true;
    
    // After fade animation completes, hide splash and emit event
    setTimeout(() => {
      this.showSplash = false;
      this.splashComplete.emit();
    }, 1500); // 1.5 seconds for fade animation
  }
}