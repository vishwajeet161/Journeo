import { Component } from '@angular/core';

@Component({
  selector: 'journeo-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoggedIn = false; // Later replace with AuthService

  constructor() {
  }
  
}
