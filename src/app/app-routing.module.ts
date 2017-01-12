import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitiativeTrackerComponent} from "./InitiativeTracker/InitiativeTrackerComponent";

const routes: Routes = [
  {path: '', component: InitiativeTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TakeTheInitiativeRouter { }
