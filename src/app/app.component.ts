import { Component } from '@angular/core';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  imports: [PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reniboediarti';
}
