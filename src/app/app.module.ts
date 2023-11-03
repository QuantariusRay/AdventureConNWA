import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavbarModule, IgxCardModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { AttendPageComponent } from './attend-page/attend-page.component';
import { VenuePageComponent } from './venue-page/venue-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { MeepleAcademyComponent } from './meeple-academy/meeple-academy.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    HomePageComponent,
    AttendPageComponent,
    VenuePageComponent,
    SponsorsPageComponent,
    MeepleAcademyComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    FormsModule,
    IgxNavbarModule,
    IgxCardModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
