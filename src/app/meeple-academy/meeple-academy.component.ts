import { Component } from '@angular/core';
import {
  IgxAvatarComponent, IgxButtonDirective,
  IgxCardComponent,
  IgxCardHeaderComponent, IgxIconComponent,
  IgxNavbarComponent, IgxNavbarTitleDirective, IgxRippleDirective
} from '@infragistics/igniteui-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meeple-academy',
  templateUrl: './meeple-academy.component.html',
  styleUrls: ['./meeple-academy.component.scss'],
  imports: [
    IgxNavbarComponent,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxNavbarTitleDirective,
    IgxAvatarComponent,
    IgxIconComponent,
    IgxButtonDirective,
    IgxRippleDirective,
    RouterLink
  ],
  standalone: true
})
export class MeepleAcademyComponent {}
