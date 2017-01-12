import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitiativeTrackerComponent} from "./InitiativeTracker/initiative-tracker.component";

const routes: Routes = [
  {path: '', component: InitiativeTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TakeTheInitiativeRouter { }
