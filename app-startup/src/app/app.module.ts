import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { Superclass1Component } from './factory/classes/superclass1/superclass1.component';
import { WebservicesComponent } from './factory/webservices/webservices.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SigninComponent } from './sign/signin/signin.component';
import { SignupComponent } from './sign/signup/signup.component';
import { RecoveryComponent } from './sign/recovery/recovery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Superclass1Component,
    WebservicesComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    TermsComponent,
    ContactsComponent,
    SigninComponent,
    SignupComponent,
    RecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
