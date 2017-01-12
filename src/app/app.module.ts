import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AuthProviders, AuthMethods, AngularFireModule} from "angularfire2";

import { AppComponent } from './app.component';
import {TakeTheInitiativeRouter} from './app-routing.module';
import {InitiativeTrackerComponent} from "./InitiativeTracker/InitiativeTrackerComponent";

const firebaseConfig = {
  apiKey: "AIzaSyBO8X2z48pVHqTH7JdBb_SaN328ThLmcmo",
  authDomain: "taketheinitiative-d2f42.firebaseapp.com",
  databaseURL: "https://taketheinitiative-d2f42.firebaseio.com",
  storageBucket: "taketheinitiative-d2f42.appspot.com",
  messagingSenderId: "1034280834553"
};

var firebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    InitiativeTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TakeTheInitiativeRouter,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
