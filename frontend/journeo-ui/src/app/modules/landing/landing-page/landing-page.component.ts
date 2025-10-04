import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'journeo-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  isLoggedIn = false; // Later replace with AuthService

  constructor(private router: Router) {}

  navigateTo(service: string) {
    if (this.isLoggedIn) {
      this.router.navigate([`/${service}`]);
    } else {
      this.router.navigate(['/login'], { queryParams: { redirect: service } });
    }
  }

  selectedService: string = 'train'; // Default selected service

  selectService(service: string) {
    this.selectedService = service;
  }

  getServiceCardClass(service: string): string {
    const baseClasses = 'bg-white bg-opacity-10 backdrop-blur-md border-2 rounded-xl p-6 text-center';
    const selectedClasses = 'border-blue-400 bg-blue-500 bg-opacity-20 shadow-lg';
    const unselectedClasses = 'border-transparent hover:border-white hover:bg-opacity-20';
    
    return this.selectedService === service 
      ? `${baseClasses} ${selectedClasses}`
      : `${baseClasses} ${unselectedClasses}`;
  }

  private backgroundImages = {
    train: 'assets/images/train_bg.jpg',
    bus: 'assets/images/bus_bg1.jpg',
    flight: 'assets/images/flight_bg1.jpg'
  };
  getBackgroundImage(): string {
    return this.backgroundImages[this.selectedService as keyof typeof this.backgroundImages];
    
  }
}
