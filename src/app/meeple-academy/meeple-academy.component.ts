import { Component } from '@angular/core';
import {
  IgxAvatarComponent, IgxButtonDirective,
  IgxCardComponent,
  IgxCardHeaderComponent, IgxIconComponent,
  IgxNavbarComponent, IgxNavbarTitleDirective, IgxRippleDirective
} from '@infragistics/igniteui-angular';
import { RouterLink } from '@angular/router';
import { Member, ProfileCardComponent } from '../components/profile-card/profile-card.component';
import { NgForOf } from '@angular/common';

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
    RouterLink,
    ProfileCardComponent,
    NgForOf
  ],
  standalone: true
})
export class MeepleAcademyComponent {
  members: Member[] = [
    {
      name: 'Jared',
      title: 'President',
      img: '',
      faveGame: 'Shadows of Brimstone',
      faveMechanic: 'Dungeon Crawling',
    },
    {
      name: 'Jesse',
      title: 'Vice-President',
      img: '',
      faveGame: 'Ark Nova',
      faveMechanic: 'Engine Building',
    },
    {
      name: 'Q',
      title: 'Event Director',
      img: '',
      faveGame: 'Spirit Island',
      faveMechanic: 'Engine Building',
    },
    {
      name: 'Liz',
      title: 'Marketing Director',
      img: '',
      faveGame: '???',
      faveMechanic: '???',
    },
    {
      name: 'Clancy',
      title: 'Program Director',
      img: '',
      faveGame: '???',
      faveMechanic: '???',
    },
    {
      name: 'Heather',
      title: 'Financial Director',
      img: '',
      faveGame: '???',
      faveMechanic: '???',
    }
  ];
}
