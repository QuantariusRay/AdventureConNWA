import { Component } from '@angular/core';
import {
  IgxButtonDirective,
  IgxCardComponent,
  IgxCardHeaderComponent,
  IgxNavbarComponent,
  IgxNavbarTitleDirective, IgxRippleDirective
} from '@infragistics/igniteui-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sponsors-page',
  templateUrl: './sponsors-page.component.html',
  styleUrls: ['./sponsors-page.component.scss'],
  imports: [
    IgxNavbarTitleDirective,
    IgxNavbarComponent,
    IgxCardHeaderComponent,
    IgxCardComponent,
    IgxButtonDirective,
    IgxRippleDirective,
    RouterLink
  ],
  standalone: true
})
export class SponsorsPageComponent {}
