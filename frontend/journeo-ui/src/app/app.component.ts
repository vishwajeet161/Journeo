import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./modules/landing/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LandingPageComponent, RouterOutlet]
})
export class AppComponent {
  title = 'journeo-ui';
}
