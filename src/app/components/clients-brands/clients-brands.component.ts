import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-brands',
  imports: [CommonModule],
  templateUrl: './clients-brands.component.html',
  styleUrl: './clients-brands.component.scss'
})
export class ClientsBrandsComponent {

  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = contactSection.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}