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
}
