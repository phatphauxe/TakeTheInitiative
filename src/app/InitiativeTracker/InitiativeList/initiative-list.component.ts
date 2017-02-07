/**
 * Created by Admin on 1/11/2017.
 */
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {SessionService} from "../../shared/services/sessionService";
import {isNullOrUndefined} from "util";

@Component ({
  selector: 'tti-initiative-list',
  styles: [require('./initiative-list.style.scss')],
  template: require('./initiative-list.template.html')
})

export class InitiativeListComponent implements OnInit{

  @Input() initiativeList;
  @Input() sessionID;
  @Output() removeCombatant = new EventEmitter<any>()
  started = false;
  round = 1;
  constructor(private sessionService:SessionService){

  }

  ngOnInit(){
    let result = this.sessionService.getSession(this.sessionID);
    result.subscribe((x) => {
      if(x) {
        if(!isNullOrUndefined(x.round) && !isNullOrUndefined(x.started)){
          this.round = x.round;
          this.started = x.started;
        }
      }
    });
  }

  removeItem(item){
    this.removeCombatant.emit(item);
  }

  getIndex(item){
    return this.initiativeList.indexOf(item);
  }
}
