/**
 * Created by Admin on 1/11/2017.
 */
import {Component, ViewChild, EventEmitter} from '@angular/core';
import {TopMenuComponent} from "./TopMenu/top-menu.component";
import {InitiativeListComponent} from "./InitiativeList/initiative-list.component";
import {BottomMenuComponent} from "./BottomMenu/bottom-menu.component";

@Component ({
  selector: 'tti-initiative-tracker',
  styles: [require('./initiative-tracker.style.scss')],
  template: require('./initiative-tracker.template.html')
})
export class InitiativeTrackerComponent {
  @ViewChild(BottomMenuComponent) bottomView;
  @ViewChild(InitiativeListComponent) listView;
  @ViewChild(TopMenuComponent) topView;

  initiativeList = [];
  workingList = [];
  round = 1;
  currentIndex = 0;
  called = false;
  showBuilder = false;

  constructor() {
  }

  begin(event) {

  }

  advance(event) {
    if(!this.called) {
      this.called = true;
      if (this.currentIndex == this.workingList.length - 1) {
        this.currentIndex = 0;
        this.round = this.round + 1;
        this.shiftList();
        this.called = false;
      }
      else {
        this.currentIndex = this.currentIndex + 1;
        this.shiftList();
        this.called = false;
      }
    }
  }

  resetAll(event) {
    this.initiativeList = [];
    this.workingList = this.initiativeList;
    this.bottomView.started = false;
    this.round = 1;
    this.currentIndex = 0;
  }

  addInitiativeItem(event) {
    this.showBuilder = true;
    this.addItemToList(event);
  }

  closeBuilder(event){
    this.showBuilder = false;
  }

  addItemToList(item) {

      this.initiativeList.push(item);
      this.initiativeList.sort(function (a, b) {
        return parseInt(a.order) - parseInt(b.order);
      });
      this.initiativeList.reverse();
    if (!this.bottomView.started) {
      this.workingList = this.initiativeList;
    }
    else {
      this.shiftList();
    }
  }

  insertInto(arr, index, item)
  {
    arr.splice(index, 0, item);
  }

  shiftList(){
    let tempList = this.initiativeList.map((x) => {return x});

    this.workingList = tempList.splice(this.currentIndex, tempList.length - this.currentIndex);
    tempList.forEach((x) => {
      this.workingList.push(x);
    });
  }


}
