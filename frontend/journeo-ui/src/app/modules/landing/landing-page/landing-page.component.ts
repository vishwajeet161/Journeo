import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'journeo-landing-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {


  selectedService: string = 'train'; // Default selected service

  services = [
    { id: 'train', name: 'Train', icon: '🚆', color: 'cyan' },
    { id: 'bus', name: 'Bus', icon: '🚌', color: 'blue' },
    { id: 'flight', name: 'Flight', icon: '✈️', color: 'purple' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize any required data
  }

  /**
   * Handle service selection
   * @param service - The selected service (train, bus, flight)
   */
  selectService(service: string): void {
    this.selectedService = service;
    console.log(`Selected service: ${service}`);
    
    // You can add additional logic here like:
    // - Analytics tracking
    // - Pre-filling search forms
    // - Showing service-specific content
  }

  /**
   * Navigate to search page for the selected service
   * This can be used if you want programmatic navigation
   */
  navigateToServiceSearch(service: string): void {
    this.selectService(service);
    // Optional: Add a small delay for better UX
    setTimeout(() => {
      this.router.navigate([`/${service}`]);
    }, 300);
  }

  /**
   * Get service statistics (you can replace with actual API data)
   */
  getServiceStats(): any {
    return {
      travelers: '1M+',
      support: '24/7',
      priceGuarantee: 'Best Price'
    };
  }

  /**
   * Handle scroll to next section
   */
  scrollToNextSection(): void {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

