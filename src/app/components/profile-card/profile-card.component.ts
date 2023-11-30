import { Component, Input } from '@angular/core';
import {
  IgxAvatarComponent,
  IgxCardComponent, IgxCardContentDirective,
  IgxCardHeaderComponent,
  IgxIconComponent
} from '@infragistics/igniteui-angular';

export interface Member {
  name: string;
  title: string;
  img?: string;
  faveGame: string;
  faveMechanic: string;
}
@Component({
  selector: 'profile-card',
  template: `
    <igx-card type="outlined" class="card">
      <igx-card-header>
        <div igxCardThumbnail>
          <igx-avatar shape="circle">
            <igx-icon>
              person
            </igx-icon>
          </igx-avatar>
        </div>
        <h3 igxCardHeaderTitle>
          {{ member.name }}
        </h3>
        <h5 igxCardHeaderSubtitle>
            {{ member.title }}
        </h5>
      </igx-card-header>
      <igx-card-content>
        <div>
          <span>Favorite Mechanic: </span>
          <span>{{ member.faveMechanic }}</span>
        </div>

        <div>
          <span>Favorite Game: </span>
          <span>{{ member.faveGame }}</span>
        </div>
      </igx-card-content>
    </igx-card>
  `,
  imports: [
    IgxAvatarComponent,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxIconComponent,
    IgxCardContentDirective
  ],
  standalone: true
})
export class ProfileCardComponent {
  @Input() member!: Member;
}
