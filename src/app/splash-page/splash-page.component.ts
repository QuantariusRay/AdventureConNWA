import { Component } from '@angular/core';
import { IgxIconComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss'],
  imports: [
    IgxIconComponent
  ],
  standalone: true
})
export class SplashPageComponent {}
