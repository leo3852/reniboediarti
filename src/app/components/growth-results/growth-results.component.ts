import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-growth-results',
  imports: [CommonModule],
  templateUrl: './growth-results.component.html',
  styleUrl: './growth-results.component.scss'
})
export class GrowthResultsComponent {
  eventImages = [
    {
      id: 1,
      image: 'work/events/event1.png',
      description: 'Event Seiko Diver Indonesia Gathering by Jamtangan.com'
    },
    {
      id: 2,
      image: 'work/events/event2.png',
      description: 'Event Instameet with Boylagi at Makna Coffee Kemang Jakarta by Jamtangan.com'
    },
    {
      id: 3,
      image: 'work/events/event3.png',
      description: 'Event Brunch at 10 with Darahkubiru, Supperklab PO Jakarta by Jamtangan.com'
    },
    {
      id: 4,
      image: 'work/events/event4.png',
      description: 'Golf o clock at Mulligan Studio Surabaya event'
    },
    {
      id: 5,
      image: 'work/events/event5.png',
      description: 'Seiko Diver Indonesia Gathering in Jakarta Lot 9'
    },
    {
      id: 6,
      image: 'work/events/event6.png',
      description: 'Instameet Community meet up Makna Coffee Kemang Jakarta'
    },
    {
      id: 7,
      image: 'work/events/event7.png',
      description: 'Brunch at 10 event talk show with Darahkubiru at Supperklab Cikini Jakarta'
    },
    {
      id: 8,
      image: 'work/events/event1.png',
      description: 'Event Seiko Diver Indonesia Gathering by Jamtangan.com'
    }
  ];

  activeOverlay: number | null = null;

  toggleOverlay(imageId: number): void {
    this.activeOverlay = this.activeOverlay === imageId ? null : imageId;
  }

  closeOverlay(): void {
    this.activeOverlay = null;
  }
}
