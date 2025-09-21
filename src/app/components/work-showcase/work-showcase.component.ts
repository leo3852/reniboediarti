import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-showcase',
  imports: [CommonModule],
  templateUrl: './work-showcase.component.html',
  styleUrl: './work-showcase.component.scss'
})
export class WorkShowcaseComponent {
  instagramWork = [
    {
      id: 1,
      image: 'work/instagram/ig1.png',
      caption: 'Social media project manager @lifewithraynor'
    },
    {
      id: 2,
      image: 'work/instagram/ig2.png',
      caption: 'Brand launching concept @diadiv.id skincare'
    },
    {
      id: 3,
      image: 'work/instagram/ig3.png',
      caption: 'Social media content @fullstopindonesia'
    },
    {
      id: 4,
      image: 'work/instagram/ig4.png',
      caption: 'Social media content @jusophofficial'
    },
    {
      id: 5,
      image: 'work/instagram/ig5.png',
      caption: 'Social media content @wirefoxcafe'
    },
    {
      id: 6,
      image: 'work/instagram/ig6.png',
      caption: 'Social media content @elmo.surabaya'
    },
    {
      id: 7,
      image: 'work/instagram/ig7.png',
      caption: 'Brand launching concept & social media caption @thegentlepig'
    },
    {
      id: 8,
      image: 'work/instagram/ig8.png',
      caption: 'Stage and music recap content @tamanpusakata'
    },
    {
      id: 9,
      image: 'work/instagram/ig9.png',
      caption: 'Content activation @garasi.coworkspace'
    }
  ];
}
