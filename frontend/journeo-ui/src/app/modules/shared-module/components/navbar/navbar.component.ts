import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'journeo-navbar',
  imports: [NgIf, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedIn = false; // Change based on auth state
  userName = 'Vishwajeet'; // Dynamic user name
  showUserDropdown = false;
  isMobileMenuOpen = false;

  // Toggle mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.showUserDropdown = false; // Close user dropdown when mobile menu opens
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Toggle user dropdown
  toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
  }

  // Get user initial for avatar
  getUserInitial(): string {
    return this.userName ? this.userName.charAt(0).toUpperCase() : 'U';
  }

  // Logout function
  logout() {
    this.isLoggedIn = false;
    this.showUserDropdown = false;
    this.isMobileMenuOpen = false;
    // Add your logout logic here
    console.log('User logged out');
  }

  // Close dropdowns when clicking outside (you can implement this)
  onDocumentClick(event: Event) {
    // Implementation for closing dropdowns when clicking outside
  }
}