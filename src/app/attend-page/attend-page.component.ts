import { Component } from '@angular/core';
import {
  IgxButtonDirective,
  IgxCardComponent,
  IgxCardHeaderComponent, IgxIconComponent,
  IgxNavbarComponent, IgxNavbarTitleDirective, IgxRippleDirective
} from '@infragistics/igniteui-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attend-page',
  templateUrl: './attend-page.component.html',
  styleUrls: ['./attend-page.component.scss'],
  imports: [
    IgxNavbarComponent,
    IgxNavbarTitleDirective,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxButtonDirective,
    IgxRippleDirective,
    RouterLink,
    IgxIconComponent
  ],
  standalone: true
})
export class AttendPageComponent {}
