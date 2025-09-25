import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { WorkShowcaseComponent } from '../work-showcase/work-showcase.component';
import { CampaignsComponent } from '../campaigns/campaigns.component';
import { GrowthResultsComponent } from '../growth-results/growth-results.component';
import { AiWorkComponent } from '../ai-work/ai-work.component';
import { ClientsBrandsComponent } from '../clients-brands/clients-brands.component';
import { MediaFeaturesComponent } from '../media-features/media-features.component';
import { ContactComponent } from '../contact/contact.component';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    CommonModule,
    SplashScreenComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    WorkShowcaseComponent,
    CampaignsComponent,
    GrowthResultsComponent,
    AiWorkComponent,
    ClientsBrandsComponent,
    MediaFeaturesComponent,
    ContactComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  showSplash = true;

  onSplashComplete(): void {
    this.showSplash = false;
  }
}
