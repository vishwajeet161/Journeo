import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'journeo-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() conf:any;
  isLoggedIn = false; // Later replace with AuthService
  constructor(private router: Router ) {
  }

  ngOnInit() {
    console.log(this.conf);
    console.log(this.router.url);
    this.isLoggedIn = this.conf?.isLoggedIn || false;
  }
}
