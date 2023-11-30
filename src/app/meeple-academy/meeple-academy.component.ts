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
      faveGame: 'Blood Rage',
      faveMechanic: 'Dice Placement',
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
      faveMechanic: 'Action Drafting',
    },
    {
      name: 'Liz',
      title: 'Marketing Director',
      img: '',
      faveGame: 'War of the Ring',
      faveMechanic: 'Trading',
    },
    {
      name: 'Clancy',
      title: 'Program Director',
      img: '',
      faveGame: 'Champions of Midgar',
      faveMechanic: 'Worker Placement',
    },
    {
      name: 'Heather',
      title: 'Financial Director',
      img: '',
      faveGame: 'Kemet: Blood and Sand',
      faveMechanic: 'Card Drafting',
    }
  ];
}
