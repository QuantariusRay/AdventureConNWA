import { Component } from '@angular/core';
import {
  IgxButtonDirective,
  IgxNavbarComponent,
  IgxNavbarTitleDirective,
  IgxRippleDirective
} from '@infragistics/igniteui-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-venue-page',
  templateUrl: './venue-page.component.html',
  styleUrls: ['./venue-page.component.scss'],
  imports: [
    IgxNavbarComponent,
    IgxNavbarTitleDirective,
    IgxButtonDirective,
    IgxRippleDirective,
    RouterLink
  ],
  standalone: true
})
export class VenuePageComponent {}
