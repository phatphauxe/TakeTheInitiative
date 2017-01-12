/**
 * Created by Admin on 1/11/2017.
 */
import {Component, ViewChild} from '@angular/core';
import {TopMenuComponent} from "./TopMenu/top-menu.component";
import {InitiativeListComponent} from "./InitiativeList/initiative-list.component";
import {BottomMenuComponent} from "./BottomMenu/bottom-menu.component";

@Component ({
  selector: 'tti-initiative-tracker',
  styles: [require('./initiative-tracker.style.scss')],
  template: require('./initiative-tracker.template.html')
})
export class InitiativeTrackerComponent {

  initiativeList = [{name: "A.J.", order: "17", }, {name: "Rylee", order:"5"}, {name: 'Kyra', order: '10'}];
  round = 1;
  constructor() {
  }

  addInitiativeItem(){

  }

  removeInitiativeItem(){

  }

  clearInitiativeList(){

  }


}
