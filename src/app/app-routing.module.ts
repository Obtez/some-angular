import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {TermsComponent} from "./policies/terms/terms.component";
import {DataPolicyComponent} from "./policies/data-policy/data-policy.component";
import {CookiesPolicyComponent} from "./policies/cookies-policy/cookies-policy.component";
import {LoginComponent} from "./login/login.component";
import {TrialOfferComponent} from "./trial-offer/trial-offer.component";

const routes: Routes = [
  // NAVBAR ROUTES
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  // TRIAL
  { path: 'trial', component: TrialOfferComponent },
  // POLICIES
  { path: 'terms', component: TermsComponent },
  { path: 'data-policy', component: DataPolicyComponent },
  { path: 'cookies-policy', component: CookiesPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
