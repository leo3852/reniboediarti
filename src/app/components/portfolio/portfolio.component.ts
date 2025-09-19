import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
