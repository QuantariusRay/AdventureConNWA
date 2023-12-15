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
  pronoun: string;
  bio: string;
  contact: string;
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
        <span class="title" igxCardHeaderTitle>
          {{ member.title }}
        </span>
        <h5 igxCardHeaderSubtitle>
            {{ member.name }} ({{ member.pronoun }})
        </h5>
        <span class="contact" igxCardHeaderSubtitle>
          email: {{ member.contact }}
        </span>
      </igx-card-header>
      <igx-card-content>
        <div>
          <span><strong>Favorite Mechanic: </strong></span>
          <span>{{ member.faveMechanic }}</span>
        </div>

        <div>
          <span><strong>Favorite Game: </strong></span>
          <span>{{ member.faveGame }}</span>
        </div>

        <p class="bio">{{ member.bio }}</p>
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
  standalone: true,
  styles: [`
    .title, .contact {
      font-size: 1rem;
    }

    .bio {
      margin-top: .5rem;
    }
  `]
})
export class ProfileCardComponent {
  @Input() member!: Member;
}
