import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { SignupFormComponent } from './home/signup-form/signup-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { TermsComponent } from './policies/terms/terms.component';
import { DataPolicyComponent } from './policies/data-policy/data-policy.component';
import { CookiesPolicyComponent } from './policies/cookies-policy/cookies-policy.component';
import { LoginComponent } from './login/login.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { SpacerComponent } from './spacer/spacer.component';
import { TrialOfferComponent } from './trial-offer/trial-offer.component';
import { FooterComponent } from './layout/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    DashboardComponent,
    HomeHeroComponent,
    SignupFormComponent,
    TermsComponent,
    DataPolicyComponent,
    CookiesPolicyComponent,
    LoginComponent,
    SocialButtonsComponent,
    SpacerComponent,
    TrialOfferComponent,
    FooterComponent,
    LayoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
