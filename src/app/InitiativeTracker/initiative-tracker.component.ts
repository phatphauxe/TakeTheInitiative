/**
 * Created by Admin on 1/11/2017.
 */
import {Component, ViewChild, EventEmitter, OnInit} from '@angular/core';
import {TopMenuComponent} from "./TopMenu/top-menu.component";
import {InitiativeListComponent} from "./InitiativeList/initiative-list.component";
import {BottomMenuComponent} from "./BottomMenu/bottom-menu.component";
import {CombatantService} from "../shared/services/combatantService";
import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {Router} from "@angular/router";
import {SessionService} from "../shared/services/sessionService";
import {isNullOrUndefined} from "util";

@Component ({
  selector: 'tti-initiative-tracker',
  styles: [require('./initiative-tracker.style.scss')],
  template: require('./initiative-tracker.template.html')
})
export class InitiativeTrackerComponent implements OnInit {
  @ViewChild(BottomMenuComponent) bottomView;
  @ViewChild(InitiativeListComponent) listView;
  @ViewChild(TopMenuComponent) topView;

  enteredSession = 1;
  sessionDynamic:FirebaseObjectObservable<any>;
  session = null;
  serverList:FirebaseListObservable<any>;
  initiativeList = [];
  workingList = [];
  round = 1;
  currentIndex = 0;
  called = false;
  started = false;

  constructor(private combatantService:CombatantService, private sessionService:SessionService, private router:Router) {

  }

  ngOnInit(){
    this.sessionDynamic = this.sessionService.getSession(this.enteredSession);
    this.sessionDynamic.subscribe((x) => {

      if(x) {
        if(!isNullOrUndefined(x.currentIndex) && !isNullOrUndefined(x.round) && !isNullOrUndefined(x.started)) {
          this.currentIndex = x.currentIndex;
          this.round = x.round;
          this.started = x.started;
          this.shiftList();
        }
        else {
          this.sessionService.setSession(this.enteredSession, {currentIndex: this.currentIndex, round: this.round, started: false});
        }
      }
      else {
        this.sessionService.setSession(this.enteredSession, {currentIndex: this.currentIndex, round: this.round, started: false});
      }

    });

    this.serverList = this.combatantService.getSessionByID(this.enteredSession);
    this.serverList.subscribe((x) => {
      this.initiativeList = [];
      x.forEach((c:any)=>{
        this.addItemToList(c);
      });
    });
  }

  begin(event) {
    this.sessionService.setSession(this.enteredSession, {currentIndex: this.currentIndex, round: this.round, started: true});
  }

  advance(event) {
    if(!this.called) {
      this.called = true;
      if (this.currentIndex == this.workingList.length - 1) {
        this.currentIndex = 0;
        this.round = this.round + 1;
        this.shiftList();
        this.called = false;
        this.sessionService.setSession(this.enteredSession, {currentIndex: this.currentIndex, round: this.round, started: this.started});
      }
      else {
        this.currentIndex = this.currentIndex + 1;
        this.shiftList();
        this.called = false;
        this.sessionService.setSession(this.enteredSession, {currentIndex: this.currentIndex, round: this.round, started: this.started});
      }
    }
  }

  resetAll(event) {


    this.bottomView.started = false;
    this.round = 1;
    this.currentIndex = 0;
    this.shiftList();
    this.sessionService.setSession(this.enteredSession, {currentIndex: this.currentIndex, round: this.round, started: this.started});
  }

  addInitiativeItem(event) {
    this.router.navigate(['combatant/create']);
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

  shiftList(){
    let tempList = this.initiativeList.map((x) => {return x});

    this.workingList = tempList.splice(this.currentIndex, tempList.length - this.currentIndex);
    tempList.forEach((x) => {
      this.workingList.push(x);
    });
  }


}
