import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { WorkShowcaseComponent } from '../work-showcase/work-showcase.component';
import { CampaignsComponent } from '../campaigns/campaigns.component';
import { GrowthResultsComponent } from '../growth-results/growth-results.component';
import { AiWorkComponent } from '../ai-work/ai-work.component';
import { MediaFeaturesComponent } from '../media-features/media-features.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    WorkShowcaseComponent,
    CampaignsComponent,
    GrowthResultsComponent,
    AiWorkComponent,
    MediaFeaturesComponent,
    ContactComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
