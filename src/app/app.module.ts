import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AuthProviders, AuthMethods, AngularFireModule} from "angularfire2";

import { AppComponent } from './app.component';
import {TakeTheInitiativeRouter} from './app-routing.module';
import {InitiativeTrackerComponent} from "./InitiativeTracker/initiative-tracker.component";
import {BottomMenuComponent} from "./InitiativeTracker/BottomMenu/bottom-menu.component";
import {InitiativeListComponent} from "./InitiativeTracker/InitiativeList/initiative-list.component";
import {TopMenuComponent} from "./InitiativeTracker/TopMenu/top-menu.component";
import {ListItemComponent} from "./InitiativeTracker/InitiativeList/InitiativeListItem/initiative-list-item.component";
import {ItemBuilderComponent} from "./CombatantEditor/ItemBuilder/item-builder.component";
import {InitiativeTrackerDesktopComponent} from "./InitiativeTrackerDesktop/initiative-tracker-desktop.component";
import {CombatantService} from "./shared/services/combatantService";
import {ItemEditorComponent} from "./CombatantEditor/ItemEditor/item-editor.component";
import {SessionService} from "./shared/services/sessionService";

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
    InitiativeTrackerComponent,
    InitiativeTrackerDesktopComponent,
    TopMenuComponent,
    BottomMenuComponent,
    InitiativeListComponent,
    ListItemComponent,
    ItemBuilderComponent,
    ItemEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TakeTheInitiativeRouter,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [CombatantService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
