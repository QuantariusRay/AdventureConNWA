import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'error', loadComponent: () => import('./error-routing/error/uncaught-error.component').then((page) => page.UncaughtErrorComponent)},
  { path: '', loadComponent: () => import('./splash-page/splash-page.component').then((page) => page.SplashPageComponent), data: { text: 'Splash Page' }},
  { path: 'home', loadComponent: () => import('./home-page/home-page.component').then((page) => page.HomePageComponent), data: { text: 'Home Page' }},
  { path: 'attend', loadComponent: () => import('./attend-page/attend-page.component').then(page => page.AttendPageComponent), data: { text: 'Attend Page' }},
  { path: 'venue', loadComponent: () => import('./venue-page/venue-page.component').then(page => page.VenuePageComponent), data: { text: 'Venue Page' }},
  { path: 'sponsors', loadComponent: () => import('./sponsors-page/sponsors-page.component').then(page => page.SponsorsPageComponent), data: { text: 'Sponsor Page' }},
  { path: 'meeple-academy', loadComponent: () => import('./meeple-academy/meeple-academy.component').then(page => page.MeepleAcademyComponent), data: { text: 'Meeple Academy' }},
  { path: '**', loadComponent: () => import('./error-routing/not-found/not-found.component').then(page => page.PageNotFoundComponent)},
]
