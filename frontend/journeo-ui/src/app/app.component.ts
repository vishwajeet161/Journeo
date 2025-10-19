import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './modules/shared-module/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'journeo-ui';
  navConf: any = {
    isLoggedIn: false,
    userRole: 'guest'
  };
}
