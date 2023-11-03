import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AttendPageComponent } from './attend-page/attend-page.component';
import { VenuePageComponent } from './venue-page/venue-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { MeepleAcademyComponent } from './meeple-academy/meeple-academy.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'splash-page', component: SplashPageComponent, data: { text: 'Splash Page' } },
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent, data: { text: 'Home Page' } },
  { path: 'attend-page', component: AttendPageComponent, data: { text: 'Attend Page' } },
  { path: 'venue-page', component: VenuePageComponent, data: { text: 'Venue Page' } },
  { path: 'sponsors-page', component: SponsorsPageComponent, data: { text: 'Sponsors Page' } },
  { path: 'meeple-academy', component: MeepleAcademyComponent, data: { text: 'Meeple Academy' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
