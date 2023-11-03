import { Component } from '@angular/core';
import {
  IgxCardComponent,
  IgxCardHeaderComponent,
  IgxNavbarComponent,
  IgxNavbarTitleDirective
} from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-sponsors-page',
  templateUrl: './sponsors-page.component.html',
  styleUrls: ['./sponsors-page.component.scss'],
  imports: [
    IgxNavbarTitleDirective,
    IgxNavbarComponent,
    IgxCardHeaderComponent,
    IgxCardComponent
  ],
  standalone: true
})
export class SponsorsPageComponent {}
