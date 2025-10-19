import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'journeo-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() conf:any;
  isLoggedIn = false; // Later replace with AuthService

  constructor() {}

  ngOnInit() {
    console.log(this.conf);
    this.isLoggedIn = this.conf?.isLoggedIn || false;
  }
}
