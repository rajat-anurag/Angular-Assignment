import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Route3Component } from './route3/route3.component';
import { Route2Component } from './route2/route2.component';
import { AppRoutingModule } from './app-routing.module';
import { Route1Component } from './route1/route1.component';
import { Route4Component } from './route4/route4.component';
import { Route5Component } from './route5/route5.component';
import { Route6Component } from './route6/route6.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    // Route3Component,
    // Route1Component,
    // Route4Component,
    // Route5Component,
    // Route6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    // FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
