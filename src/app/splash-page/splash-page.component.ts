import { Component } from '@angular/core';
import { IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss'],
  imports: [
    IgxIconComponent,
    IgxButtonDirective,
    IgxRippleDirective,
    RouterLink
  ],
  providers: [
  ],
  standalone: true
})
export class SplashPageComponent {}
