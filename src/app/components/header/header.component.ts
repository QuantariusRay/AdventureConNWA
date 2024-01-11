import { Component } from '@angular/core';
import {
  IgxButtonDirective,
  IgxNavbarComponent,
  IgxNavbarTitleDirective,
  IgxRippleDirective
} from '@infragistics/igniteui-angular';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <igx-navbar class="navbar">
      <igx-navbar-title class="navbar-content">
        <h6 class="h6">
          AdventureCon
        </h6>
        <div class="navigation">
          <button igxButton="flat" igxRipple routerLink="/home" class="button">
            Home
          </button>
          <button igxButton="flat" igxRipple routerLink="/attend" class="button">
            Attend
          </button>
          <button igxButton="flat" igxRipple routerLink="/venue" class="button">
            Venue
          </button>
<!--          <button igxButton="flat" igxRipple routerLink="/sponsors" class="button">-->
<!--            Sponsors-->
<!--          </button>-->
          <button igxButton="flat" igxRipple routerLink="/meeple-academy" class="button">
            Meeple Academy
          </button>
        </div>
      </igx-navbar-title>
    </igx-navbar>
  `,
  styles: [`
    .navbar {
      height: max-content;
      min-width: min-content;
      align-self: stretch;
    }

    .navbar-content {
      gap: 1rem;
    }

    .h6 {
      margin: 0;
      color: white;
    }

    .button {
      height: max-content;
    }
  `],
  imports: [
    IgxButtonDirective,
    IgxNavbarComponent,
    IgxNavbarTitleDirective,
    IgxRippleDirective,
    RouterLink
  ]
})
export class HeaderComponent {

}
