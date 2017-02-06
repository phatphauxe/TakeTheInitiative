import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitiativeTrackerComponent} from "./InitiativeTracker/initiative-tracker.component";
import {InitiativeTrackerDesktopComponent} from "./InitiativeTrackerDesktop/initiative-tracker-desktop.component";
import {ItemBuilderComponent} from "./CombatantEditor/ItemBuilder/item-builder.component";
import {ItemEditorComponent} from "./CombatantEditor/ItemEditor/item-editor.component";

var isMobile = {
  Android: function() { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
  any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

const routes: Routes = [
  {path: '', component: (isMobile.any() ? InitiativeTrackerComponent : InitiativeTrackerDesktopComponent)},
  {path: 'combatant/create', component: (isMobile.any() ? ItemBuilderComponent : ItemBuilderComponent)},
  {path: 'combatant/:id', component: (isMobile.any() ? ItemEditorComponent : ItemEditorComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TakeTheInitiativeRouter { }
