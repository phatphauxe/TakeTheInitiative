/**
 * Created by Admin on 1/11/2017.
 */
import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {SessionService} from "../../../shared/services/sessionService";
import {FirebaseObjectObservable} from "angularfire2";
import {isNullOrUndefined} from "util";

@Component ({
  selector: 'tti-bottom-menu',
  styles: [require('./bottom-menu.style.scss')],
  template: require('./bottom-menu.template.html')
})

export class BottomMenuComponent implements OnInit{
  @Input() listLength:number;
  @Input() sessionID:number;
  @Output() advanceBtnClicked = new EventEmitter<boolean>();
  @Output() beginBtnClicked = new EventEmitter<boolean>();
  session:FirebaseObjectObservable<any>;
  started:boolean;
  currentIndex:any;
  round:number;

  constructor(private sessionService:SessionService){}

  ngOnInit(){
    this.session = this.sessionService.getSession(this.sessionID);
    this.session.subscribe((x) => {
      if(x) {
        if(!isNullOrUndefined(x.started)){
          this.started = x.started;
        }
      }
    })

  }

  getButtonIconType(){
    if(this.started){
      return 'forward';
    }
    else {
      return 'play_circle_outline';
    }
  }

  startCombat(e){
    e.preventDefault();
    if(!this.started) {
      if(this.listLength > 1) {
        this.beginBtnClicked.emit(true);

      }
    }
    else {
      //move initiative order
      this.advanceBtnClicked.emit(true);
    }
  }
}
