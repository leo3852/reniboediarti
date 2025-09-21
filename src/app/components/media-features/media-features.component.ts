import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-features',
  imports: [CommonModule],
  templateUrl: './media-features.component.html',
  styleUrl: './media-features.component.scss'
})
export class MediaFeaturesComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slideInterval: any;
  videoLoaded: { [key: number]: boolean } = {};
  isPaused = false;
  isMobile = false;
  touchStartX = 0;
  touchEndX = 0;

  constructor(private sanitizer: DomSanitizer) {
    this.checkIfMobile();
  }

  newsArticles = [
    {
      id: 1,
      title: 'Social Media Strategy Expert',
      description: 'Featured coverage of innovative social media expertise and brand development',
      url: '#', // Replace with actual article URL
      source: 'Tech Magazine'
    },
    {
      id: 2,
      title: 'AI Annotation Specialist',
      description: 'Industry insights on AI data annotation and machine learning safety',
      url: '#', // Replace with actual article URL
      source: 'AI Weekly'
    },
    {
      id: 3,
      title: 'Content Creator Success',
      description: 'Profile feature on successful content creation and community building',
      url: '#', // Replace with actual article URL
      source: 'Digital Today'
    }
  ];

  youtubeVideos = [
    {
      id: 1,
      title: 'Music Program Presenter',
      videoId: 'FnMEom45DJw', // Replace with actual YouTube video ID
      description: 'For CreativeDisc.com'
    },
    {
      id: 2,
      title: 'Artist Interview',
      videoId: 'wfnPi1vAG2M', // Replace with actual YouTube video ID
      description: 'With Joan (US) for CreativeDisc.com'
    },
    {
      id: 3,
      title: 'Brand Owner Interview',
      videoId: '7WCmvJwMRKM', // Replace with actual YouTube video ID
      description: 'The Gentle Pig Opening Launch'
    },
    {
      id: 4,
      title: 'Artist Interview',
      videoId: 'NWOd29BOQbw', // Replace with actual YouTube video ID
      description: 'With Sigrid For CreativeDisc.com'
    },
    {
      id: 5,
      title: 'Youtube Live Streaming Presenter',
      videoId: 'LAdvNEXWvrc', // Replace with actual YouTube video ID
      description: 'With Pusakata for Jam Tangan.com'
    },
    {
      id: 6,
      title: 'Artist Interview',
      videoId: 'e0TO5o-jacU', // Replace with actual YouTube video ID
      description: 'With Jake Scott For CreativeDisc.com'
    },
    {
      id: 7,
      title: 'Artist Interview',
      videoId: 'YWQfGpowa7o', // Replace with actual YouTube video ID
      description: 'With Kingfishr For CreativeDisc.com'
    }
  ];

  ngOnInit(): void {
    this.startSlideShow();
  }

  ngOnDestroy(): void {
    this.stopSlideShow();
  }

  checkIfMobile(): void {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
  }

  startSlideShow(): void {
    if (!this.isPaused) {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
  }

  stopSlideShow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  pauseSlideShow(): void {
    this.isPaused = true;
    this.stopSlideShow();
  }

  resumeSlideShow(): void {
    this.isPaused = false;
    this.startSlideShow();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.youtubeVideos.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.youtubeVideos.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    // Pause slideshow when user manually navigates
    if (!this.isMobile) {
      this.pauseSlideShow();
      // Resume after 10 seconds of inactivity
      setTimeout(() => {
        this.resumeSlideShow();
      }, 10000);
    }
  }

  loadVideo(slideIndex: number): void {
    this.videoLoaded[slideIndex] = true;
    // Pause slideshow when video is loaded
    this.pauseSlideShow();
  }

  getYouTubeEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&mute=0&rel=0&showinfo=0&modestbranding=1&controls=1&fs=1&iv_load_policy=3&enablejsapi=0&origin=${window.location.origin}&playsinline=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getYouTubeThumbnail(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - next slide
        this.nextSlide();
      } else {
        // Swiped right - previous slide
        this.prevSlide();
      }
    }
  }
}
