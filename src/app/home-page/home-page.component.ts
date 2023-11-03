import { Component } from '@angular/core';
import {
  IgxButtonDirective,
  IgxNavbarComponent,
  IgxNavbarTitleDirective,
  IgxRippleDirective
} from '@infragistics/igniteui-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [
    IgxNavbarComponent,
    IgxNavbarTitleDirective,
    IgxButtonDirective,
    IgxRippleDirective,
    RouterLink
  ],
  standalone: true
})
export class HomePageComponent {}
