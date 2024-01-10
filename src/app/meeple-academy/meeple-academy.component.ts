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
      contact: 'jstrout@adventure-con.com',
      faveGame: 'Blood Rage',
      faveMechanic: 'Dice Placement',
      pronoun: 'He/Him',
      bio: 'Jared is the one who keeps us focused on our mission, makes sure that we act with compassion, and that we make a better NorthWest Arkansas in the process. From Mega Board Game Conventions to family gatherings, you can find Jared seeking to play games with people he’s never met before.'
    },
    {
      name: 'Jesse',
      title: 'Vice-President',
      img: '',
      contact: 'jarburn@adventure-con.com',
      faveGame: 'Ark Nova',
      faveMechanic: 'Engine Building',
      pronoun: 'He/Him',
      bio: 'Jesse is the catalyst for the forming of Meeple Academy of the Ozarks, and a cheerleader of sorts! He and his wife have experience running small businesses, and with that experience he reminds us that we can make a difference. Without Jesse, we wouldn’t have the determination that we do now!'
    },
    {
      name: 'Q',
      title: 'Event Director',
      img: '',
      contact: 'qray@adventure-con.com',
      faveGame: 'Spirit Island',
      faveMechanic: 'Action Drafting',
      pronoun: 'He/Him',
      bio: 'Q is exceptionally smart and fastidious. He carries with him a lot of ambition, and backs it up with thorough execution. He’s the architect of our website, our idea generator, and our do-everything guy. He’s talented, and not shy about it!'
    },
    {
      name: 'Liz',
      title: 'Marketing Director',
      img: '',
      contact: 'esites@adventure-con.com',
      faveGame: 'War of the Ring',
      faveMechanic: 'Trading',
      pronoun: 'She/Her',
      bio: 'The writer of most of Meeple Academy’s online content and emails. Talks a lot too. She’s alright.'
    },
    {
      name: 'Clancy',
      title: 'Development Director',
      img: '',
      contact: 'cclancy@adventure-con.com',
      faveGame: 'Champions of Midgar',
      faveMechanic: 'Worker Placement',
      pronoun: 'He/Him',
      bio: 'Clancy wears many hats as the Library Curator. Primarily, he’s in charge of putting together a robust library of board games that appeals to board gamers at all levels and from all walks of life. He’s also set up all of our tools for communication and organization. And last of all, he’s a sweetheart. You could tell him, “I’m going to destroy you [in this game],” and he’d simply reply “I like your spirit!” \n'
    },
    {
      name: 'Heather',
      title: 'Financial Director / Treasure',
      img: '',
      contact: 'hadams@adventure-con.com',
      faveGame: 'Kemet: Blood and Sand',
      faveMechanic: 'Card Drafting',
      pronoun: 'She/Her',
      bio: 'Our fiscal guru who’s on top of keeping us on track to host board game events, and making sure that we conduct ourselves properly as a nonprofit in good standing! It’s not the spiciest job, but it’s one that requires a smart woman with experience and training. And Heather’s the right one for us. She runs a monthly gathering with her doting husband dubbed “Castle Adams,” and is raising two ancient dogs that wear diapers.'
    }
  ];
}
