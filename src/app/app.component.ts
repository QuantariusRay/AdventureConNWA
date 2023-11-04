import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    HeaderComponent,
    NgIf
  ],
  standalone: true
})
export class AppComponent {
  showHeader: boolean = true;

  constructor(router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.showHeader = val.url != '/';
      }
    })
  }
}
